import { useState } from 'react'

import './App.css'
import Nav from './components/nav/nav'
import Card from './components/card/card'
import Trailer from './components/trailer/trailer'
import Summary from './components/summary/summary'
import Rating from './components/Ratings/rating'
import Comment from './components/comments/comment'
import Search from './components/search/search'
import Card2 from './components/card/card2'
import Card3 from './components/card/card3'
import Featured from './components/featured/featured'
import RowNoScroll from './components/RowNoScroll'



function App() {
 const comment = [
  {title:'Hello',caption:'Learn how to stop being a people pleaser with these 10 tips — Calm Blog',desc:'Have a hard time saying no? Always put others before yourself? Survey says you may be a people pleaser. Explore the dangers of the disease to please and how to stop.',image:'https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1727029299965/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w'},
  {title:'Morning',caption:'Learn how to stop being a people pleaser with these 10 tips — Calm Blog',desc:'Have a hard time saying no? Always put others before yourself? Survey says you may be a people pleaser. Explore the dangers of the disease to please and how to stop.',image:'https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1727029299965/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w'}
 ]
 
  return (
    <>
      <Nav/>
      <Card/>
      <Trailer/>
      <Summary/>
      <Rating/>
      <RowNoScroll myStyle='flex-wrap'>
          {comment?.map(i=><Comment title={i.title} image={i.image} desc={i.desc} caption={i.caption}/>)}
        <Comment title='Rishav' image='https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/t/659edb527099633496ccfcfa/1704909650356/dr-chris-mosunic.jpg' desc='Learn how to stop being a people pleaser with these 10' caption='Always put others before yourself? Survey says you may be a people pleaser. Explore the dangers of the disease to please and how to stop.'/>
      </RowNoScroll>
      <br />
      <RowNoScroll>
          {comment?.map(i=><Comment title={i.title} image={i.image} desc={i.desc} caption={i.caption}/>)}
        <Comment title='Rishav' image='https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/t/659edb527099633496ccfcfa/1704909650356/dr-chris-mosunic.jpg' desc='Learn how to stop being a people pleaser with these 10' caption='Always put others before yourself? Survey says you may be a people pleaser. Explore the dangers of the disease to please and how to stop.'/>
      </RowNoScroll>
        
     
      {/* <Nav></Nav>
      <p className="text-xl font-semibold text-white mb-3">Explore</p>
      <Search/>
      <Card2/>
      <Card3/>
      <Featured/> */}
    </>
  )
}

export default App
