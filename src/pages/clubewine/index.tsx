import React from 'react'
import { GetStaticProps } from 'next'

import ClubeCardComponent from 'components/ClubCardsComponent'
import client from 'graphql/client'
import GET_CLUBE_WINE_HOME from 'graphql/queries/getClubeWineHome'
import { ClubeWinePageProps } from 'types/api'

const ClubeWine = ({ sectionExperiencia }: ClubeWinePageProps) => (
  <>
    <ClubeCardComponent {...sectionExperiencia} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { clubeWineHome } = await client.request(GET_CLUBE_WINE_HOME)
  return {
    props: {
      ...clubeWineHome
    }
  }
}

export default ClubeWine
