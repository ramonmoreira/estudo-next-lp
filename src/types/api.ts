export type TechIcons = {
  title: string
  icon: {
    url: string
  }
}
export type Concepts = {
  concepts: {
    title: string
  }
}
export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}
export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  image: {
    alternativeText: string
    url: string
  }
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}
export type SectionModulesProps = {
  title: string
  modules: Modules[]
}
export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}
export type Reviews = {
  name: string
  review: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type Questions = {
  question: string
  answer: string
}
export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type CardExperiencia = {
  sku1: number
  sku2: number
  nomeDaExperiencia: string
  descricaoDaExperiencia: string
  precoDe: number
  url: string
}

export type SectionExperienciaProps = {
  cardExperiencia: CardExperiencia[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}

export type ClubeWinePageProps = {
  sectionExperiencia: SectionExperienciaProps
}
