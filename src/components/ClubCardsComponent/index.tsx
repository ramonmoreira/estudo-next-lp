import React from 'react'

import Container from 'components/Container'
import * as S from './styles'
import { SectionExperienciaProps } from 'types/api'

const ClubeCardComponent = ({ cardExperiencia }: SectionExperienciaProps) => (
  <Container>
    <S.Content>
      {cardExperiencia.map(
        (
          {
            sku1,
            sku2,
            nomeDaExperiencia,
            descricaoDaExperiencia,
            precoDe,
            url
          },
          index
        ) => (
          <S.Card key={index}>
            <S.Informations>
              <S.Title>WineBox</S.Title>
              <S.NameSelection>{nomeDaExperiencia}</S.NameSelection>
              <S.Description>{descricaoDaExperiencia}</S.Description>
              <S.KnowMore>SAIBA MAIS</S.KnowMore>
              <S.Bottle1
                src={`http://www.wine.com.br/cdn-cgi/image/f=auto,h=206,q=99/assets-images/produtos/${sku1}-01.png`}
                alt=""
                loading="lazy"
              />
              <S.Bottle2
                src={`http://www.wine.com.br/cdn-cgi/image/f=auto,h=206,q=99/assets-images/produtos/${sku2}-01.png`}
                alt=""
              />
            </S.Informations>
            <S.PriceBox>
              <S.PriceDiscount>
                <S.OldPrice>R$ {precoDe}</S.OldPrice>
                <S.Discount>25%OFF</S.Discount>
              </S.PriceDiscount>
              <S.PriceFinal>
                <S.PriceSmall>R$</S.PriceSmall>
                <S.PriceFinalValue>
                  {precoDe - (precoDe * 0.25).toFixed(2)}
                </S.PriceFinalValue>
                <S.PriceSmall>/Mês</S.PriceSmall>
              </S.PriceFinal>
              <S.Hr />
              <S.CallToAction href={url} target="_blank">
                ASSINE AGORA
              </S.CallToAction>
            </S.PriceBox>
          </S.Card>
        )
      )}
    </S.Content>
  </Container>
)

export default ClubeCardComponent
