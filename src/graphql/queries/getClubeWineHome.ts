import { gql } from 'graphql-request'

const GET_CLUBE_WINE_HOME = gql`
  fragment sectionExperiencia on ClubeWineHome {
    sectionExperiencia {
      cardExperiencia {
        sku1
        sku2
        nomeDaExperiencia
        descricaoDaExperiencia
        precoDe
        url
      }
    }
  }

  query GET_CLUBE_WINE_HOME {
    clubeWineHome {
      ...sectionExperiencia
    }
  }
`

export default GET_CLUBE_WINE_HOME
