import React from 'react';
import '../Slider.css';
import styled from 'styled-components';

const Container=styled.div`
display:flex;
flex:1;
aling-items:center;
justify-content:center;
`;

export default function Home() {
  return (
    <>
      <Container>
<section id="slider">
  <input type="radio" name="slider" id="s1" checked/>
  <input type="radio" name="slider" id="s2"checked/>
  <input type="radio" name="slider" id="s3"checked/>
  <input type="radio" name="slider" id="s4"checked/>
  <input type="radio" name="slider" id="s5"checked/>
    
  <label for="s1" id="slide1"><img src="images/lab.jpg" alt=""></img></label>
  <label for="s2" id="slide2"><img src="images/1.jpg" alt=""></img></label>
  <label for="s3" id="slide3"><img src="images/2.jpg" alt=""></img></label>
  <label for="s4" id="slide4"><img src="images/8.jpg" alt=""></img></label>
  <label for="s5" id="slide5"><img src="images/universal.jpg" alt=""></img></label>

</section>   
</Container>  
    </>
  );
}
