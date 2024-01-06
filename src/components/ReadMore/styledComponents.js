import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 34px;
  color: #1e293b;
  line-height: 1.5;
  letter-spacing: 0.5;
`
export const Image = styled.img`
  height: 200px;
  width: 380px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  color: #334155;
  width: 350px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const ReadMoreButton = styled.button`
  height: 40px;
  width: 100px;
  color: #ffffff;
  font-family: 'Roboto';
  outline: none;
  border: 0px;
  cursor: pointer;
  background-color: #1f81ff;
  border-radius: 6px;
`
