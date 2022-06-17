import { Key } from 'antd/lib/table/interface'
import Loading from '../Loading'
import React, { useState, useEffect, useCallback } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import * as S from './styles'
export * as TableStyle from './styles'
import { columnMapper, resultMapper } from './tableMapper'
import TableCustom from './TableCustom'
import { Pagination } from 'antd'

type RowClassName = (record: any, index: number, indent: number) => string

export type TableTypes = {
  results: any
  columns: any
  is_superuser: boolean
  /** its only to use in travel map page - will be possible select all children from parent without parent be selected  */
  isTravelMap?: boolean
  /** liberate the function onSelection and receives the keys. Default: true */
  isSelectable?: boolean
  showTotalSelecteds?: boolean
  clearSelection?: string
  loading?: boolean
  totalRows?: number
  currentPage?: number
  hideSelectAll?: boolean
  currentRowsPerPage?: number
  /**
   * to color the line use className ".vl-ant-red-row" or include others classNames in table styles
   *
   * example: (record) => record.company_owner ? ".vl-ant-red-row" : ""
   * */
  rowClassName?: string | RowClassName
  pageSizeOptions?: string[]
  defaultSort?: string
  wrapperClassName?: string
  /** When some collapse is open, this boolean show a loading inside of table with content in backgrounds */
  loadingInside?: boolean
  checkStrictly?: boolean
  defaultSortDirection?: string
  /** to liberate this you need set isSelectable on property. This function receives the keys  */
  onSelection?: (ids: Key[], selectedRows?: any) => void
  onExpandClick?: (record: any) => void
  expandLoading?: boolean
  onChangePage?: (page: number) => void
  onChangeRowsPerPage?: (
    currentRowsPerPage: number,
    currentPage: number
  ) => void
  onSortPage?: (column: string, sortDirection: string) => void
}

const Table = ({
  results,
  columns,
  is_superuser,
  isTravelMap = false,
  isSelectable = true,
  showTotalSelecteds = false,
  clearSelection = '',
  totalRows,
  loading = false,
  wrapperClassName,
  currentRowsPerPage,
  defaultSort,
  checkStrictly = true,
  hideSelectAll,
  defaultSortDirection,
  pageSizeOptions = ['25', '50', '100'],
  rowClassName,
  expandLoading = true,
  loadingInside = false,
  currentPage,
  onSelection = () => true,
  onChangePage = () => true,
  onChangeRowsPerPage = () => true,
  onSortPage = () => true,
  onExpandClick = () => true
}: TableTypes) => {
  const { debounce } = useDebounce()
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  useEffect(() => {
    /**
     * Limpador dos checkboxes marcados.
     * para realizar essa ação, na página em questão atribua um estado e gere
     * um UUID.
     */
    if (clearSelection !== '') {
      setSelectedRowKeys([])
    }
  }, [clearSelection])

  /** função para controlar as marcações nos checkboxes */
  const handleSelections = (ids: Key[], selectedRows: any) => {
    setSelectedRowKeys(ids)
    onSelection(ids, selectedRows)
  }

  /** Para o Antdesign, quando há alguma mudança de estado na tabela, tudo
   * entra em uma única função, essa função abaixo é a responsável por controlar
   * essas atividades.
   */
  const handleTableChange = useCallback(
    (paginationObj: any, filters: any, sorter: any) => {
      const { current: pagination, pageSize } = paginationObj
      const { field, order } = sorter

      const direction = order === 'ascend' ? '' : '-'

      if (pagination !== currentPage) onChangePage(pagination)

      if (pageSize !== currentRowsPerPage)
        onChangeRowsPerPage(pageSize, pagination)

      const sortDirection =
        defaultSortDirection !== undefined
          ? defaultSortDirection === ''
            ? 'ascend'
            : 'descend'
          : undefined

      if (sortDirection !== order || defaultSort !== field) {
        onSortPage(field, direction)
      }
    },
    [
      currentPage,
      currentRowsPerPage,
      defaultSort,
      defaultSortDirection,
      onChangePage,
      onChangeRowsPerPage,
      onSortPage
    ]
  )

  if (loading) {
    return <Loading fullSpace center height={300} />
  }

  const resultMapped = resultMapper(results)
  const columnMapped = columnMapper(
    columns,
    defaultSort,
    defaultSortDirection,
    is_superuser
  )

  return (
    <S.Content>
      {showTotalSelecteds && (
        <S.Selections>
          {selectedRowKeys.length > 0 && (
            <>
              <S.Span>
                {selectedRowKeys.length} selecionado
                {selectedRowKeys.length > 1 ? 's' : ''}
              </S.Span>

              <S.Pipe />

              <S.ActionToSelection>
                Selecionar todos os {totalRows}
              </S.ActionToSelection>
            </>
          )}
        </S.Selections>
      )}

      <S.Wrapper className={wrapperClassName}>
        {loadingInside && (
          <S.LoadingInsideWrapper>
            <Loading />
          </S.LoadingInsideWrapper>
        )}

        {isTravelMap ? (
          <TableCustom
            isLoading={columnMapped.length === 0}
            fields={columnMapped}
            results={resultMapped}
            onExpand={(record: any) => onExpandClick(record)}
            onRowSelection={(ids: any, records: any) =>
              handleSelections(ids, records)
            }
          />
        ) : (
          <S.Table
            rowKey={(record: any) => record.id}
            columns={columnMapped}
            dataSource={resultMapped}
            showSorterTooltip={false}
            rowClassName={rowClassName}
            sortDirections={['ascend', 'descend', 'ascend']}
            pagination={{
              current: currentPage,
              defaultCurrent: 1,
              pageSize: currentRowsPerPage,
              total: totalRows,
              size: 'small',
              showSizeChanger: true,
              showLessItems: true,
              showQuickJumper: true,
              pageSizeOptions,
              showTotal: (total: number, range: [number, number]) => (
                <span>{total} itens</span>
              )
            }}
            onChange={(paginationObj: any, filters: any, sorter: any) =>
              debounce(
                () => handleTableChange(paginationObj, filters, sorter),
                350
              )
            }
            rowSelection={
              isSelectable
                ? {
                    onChange: (ids: Key[], selectedRows: any) => {
                      handleSelections(ids, selectedRows)
                    },
                    selectedRowKeys,
                    checkStrictly,
                    hideSelectAll
                  }
                : undefined
            }
            expandable={{
              expandIcon: ({ expanded, onExpand, record }) => (
                <S.ArrowDown
                  onClick={(event: any) => {
                    onExpand(record, event)
                    !expanded && onExpandClick(record)
                  }}
                  expanded={!expanded}
                  isTransparent={!Object.keys(record).includes('children')}
                />
              )
            }}
          />
        )}

        {isTravelMap && totalRows !== 0 && (
          <S.Footer>
            <Pagination
              onChange={(pagination: number, pageSize = 25) =>
                debounce(() => {
                  if (pagination !== currentPage) onChangePage(pagination)

                  if (pageSize !== currentRowsPerPage)
                    onChangeRowsPerPage(pageSize, pagination)
                }, 350)
              }
              current={currentPage}
              defaultCurrent={1}
              pageSize={currentRowsPerPage}
              total={totalRows}
              size={'small'}
              showSizeChanger={true}
              showLessItems={true}
              showQuickJumper={true}
              pageSizeOptions={pageSizeOptions}
              showTotal={(total: number, range: [number, number]) => (
                <span>{total} itens</span>
              )}
            />
          </S.Footer>
        )}
      </S.Wrapper>
    </S.Content>
  )
}

export  {Table}
