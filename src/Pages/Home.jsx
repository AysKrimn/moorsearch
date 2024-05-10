import React from 'react'
import GridCard from '../Components/InvestCard'
import ContactForm from '../Components/ContactForm'
import DatePick from '../Components/DatePick'
import ShowCaseCard from '../Components/Card'
import News from '../Components/News'

export default function Home() {
  return (

        <>

        <hr />


        <GridCard></GridCard>
        <ContactForm></ContactForm>
        <DatePick></DatePick>
        <ShowCaseCard></ShowCaseCard>

        <News></News>

        </>
  )
}
