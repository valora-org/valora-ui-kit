export type SelectTypes = {
  /** identificador, caso necessário */
  id?: string
  /** título do select */
  label?: string
  /** exemplo de como o usuário deve colocar os dados */
  example?: string
  /** frase para quando nenhum conteúdo for encontrado */
  noContentFoundMessage?: string
  /** */
  captionMessage?: string
  placeholder?: string
  /** string que será utilizada para fazer as requisições assíncronas */
  endpoint?: string
  /** caso seja necessário aplicar alguma string no sufixo da requisição */
  suffixEndpoint?: string
  /**
   * módo como o select irá se comportar.
   * undefined: apenas uma seleção
   * multiplo: multiplas seleções
   * tags: multiplas seleções e poder de criar novos itens nas opções
   * */
  mode?: 'multiple' | 'tags' | undefined
  /** tempo de espera para o usuário digitar antes de realizar a requisição */
  timeoutDebounce?: number
  /** mensagem de erro */
  error?: string
  /** caso esse item seja selecionado, no inicio de todas as opções deverá ter um item chamado "todos"   */
  hasOptionAllItems?: boolean
  /** opções no select - síncrono
   *
   * {
   *
   *        label: string
   *
   *        value: number | string
   *
   *        disabled?: boolean
   *
   * }
   */
  options?: OptionType[]
  /** caso esse item seja selecionado, as opções do select ao decorrer da página, irá realizar paginação no endpoint */
  isPaginate?: boolean
  disabled?: boolean
  isLoading?: boolean
  /** caso esse item seja selecionado, assim que o usuário abrir a página, esse select irá realizar um request sem a query "search" buscando os 10 primeiros dados */
  startDefaultOptions?: boolean
  /** esse item precisa ser marcado como TRUE para quando estiver em modo de edição. Dica: atribua como verdadeiro nos primeiros segundos da página e depois mude para FALSO. (foi um jeito de contornar um problema do Select do AntDesign)  */
  isEditing?: boolean
  /** valor a ser colocado no momento de edição */
  value?: any
  readOnly?: any
  /** esse atributo é apenas para modo de desenvolvimento/validação, com ele dentro do Storybook podemos introduzir a mão o Token  */
  developerMode_token?: string
  /** esse atributo é apenas para modo de desenvolvimento/validação, com ele irá mostrar um exemplo no Storybook de como é o endpoint */
  developerMode_ShowAnExampleEndpoint?: boolean
  allowToClear?: boolean
  /** esse atributo faz uma limpeza nos valores selecionados, ele só irá realizar ação caso a prop. "allowToClear" seja marcada */
  clearValue?: boolean
  /** Por padrão o Select, quando o usuário selecionar os valores, só devolve o "value", com esse atributo, o select devolverá tanto o "value" como a "label" */
  getValueAndLabel?: boolean
  /** esse atributo irá bloquear as opções conforme determinado "value". É utilizado para caso o usuário selecione "Todos" nas opções, mas o backend quem manda essa opção  */
  disabledByBackend?: string
  /** contador de opções selecionadas */
  showCounter?: boolean
  name?: string
  /** esse atributo irá verificar se as Tags (mode) está no padrão HH:MM */
  isTime?: boolean
  /** função de mudanças no componente - utilizada para o React-Hook-Form */
  onChange?: (...event: any[]) => void
  /** função de mudanças no componente - utilizada para fins diversos  */
  handleChangeValue?: (el: any) => void
  /** função ativada quando o "x" dentro do select é clicado */
  onClear?: () => void
  /** função ativada quando o usuário tira o foco do componente */
  onUnfocused?: () => void
  /** função ativada quando o usuário seleciona qualquer item das opções */
  onSelected?: () => void
}

export type NoContentFoundType = Pick<SelectTypes, 'noContentFoundMessage'>

export type OptionType = {
  label: string
  value: number | string
  disabled?: boolean
}

export type Options = {
  id?: number
  value?: number | string
  name?: string
  label: string
  display_name?: string
  description?: string
  number?: string
  iata_code?: string
  external_id?: string
  initials?: string
  slug?: string
}
