import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr;
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`

export const Card = styled.article`
  width: 350px;
  height: 330px;
  margin-right: 25px;
  margin-left: 25px;
  border-radius: 4px;
  margin-top: 50px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: #f79552;
`
export const Informations = styled.div`
  height: 205px;
  position: relative;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  z-index: 3;
`

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  padding-top: 23px;
`
export const NameSelection = styled.h3`
  font-family: neo-sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`
export const Description = styled.p`
  max-width: 175px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  margin-top: 14px;
`
export const KnowMore = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
`
export const Bottles = styled.div`
  display: flex;
  align-items: initial;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
`
export const Bottle1 = styled.img`
  position: absolute;
  top: 35px;
  right: 26px;
`
export const Bottle2 = styled.img`
  position: absolute;
  right: -30px;
  top: 35px;
`
export const PriceBox = styled.div`
  height: 125px;
  background: #fde8d9;
  padding: 15px 15px 0;
  border-radius: 0 0 4px 4px;
  position: relative;
  z-index: 2;
`
export const PricesInfo = styled.div``

export const PriceDiscount = styled.div`
  display: flex;
  align-items: center;
`
export const OldPrice = styled.div`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #555;
`
export const Discount = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 19.5px;
  margin-left: 8px;
  padding: 4px 8px;
  background: #f79552;
`
export const PriceFinal = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #111;
  margin-top: 10px;
`

export const PriceFinalValue = styled.span`
  font-weight: 700;
  font-size: 24px;
`
export const PriceSmall = styled.small`
  font-size: 14px;
`
export const Hr = styled.hr`
  border-top: 0.871016px solid #f79552;
  margin-top: 15px;
`

export const CallToAction = styled.a`
  padding-top: 13px;
  padding-bottom: 13px;
  color: #f79552;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
`
