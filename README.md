# Valora UI Kit

Componentes da empresa Valora. 

Veja abaixo se é necessário a instalação dos pré-requisitos, caso contrário pule para instalação

## Pré-requisitos

Certifique-se que o projeto tenha essas libs abaixo.

recharts: ^1.8.5

moment: ^2.29.3

styled-icons: ^10.45.0

framer-motion: ^6.3.11

react-number-format: ^4.6.0

react-circular-progressbar: ^2.0.4

@ant-design/icons: ^4.7.0

antd-img-crop: ^4.2.3


Caso não tenha, instale no projeto: 

```sh
npm i recharts@^1.8.5 moment@^2.29.3 styled-icons@^10.45.0 framer-motion@^6.3.11 react-number-format@^4.6.0 react-circular-progressbar@^2.0.4 @ant-design/icons@^4.7.0 antd-img-crop@^4.2.3
```
ou 
```sh
yarn add recharts@^1.8.5 antd@^4.21.2 moment@^2.29.3 styled-icons@^10.45.0 framer-motion@^6.3.11 react-number-format@^4.6.0 react-circular-progressbar@^2.0.4 @ant-design/icons@^4.7.0 antd-img-crop@^4.2.3
```

## Instalação
```sh 
npm i valora-ui-kit
```
ou
```sh 
yarn add valora-ui-kit
```

## Inclua o CSS

inclua no arquivo principal da aplicação os seguintes css
```js
import 'react-circular-progressbar/dist/styles.css'
import "antd/dist/antd.css";
```


## Componentes que não aparecerção no Storybook

Collapse

CollapseTable 

FieldSearch


## Aprimorações

Tornar o componente "Notifications - popup de notificações" genérico
Criar pipeline de publicação no npm