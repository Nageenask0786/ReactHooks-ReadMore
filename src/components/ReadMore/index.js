// Write your code here
import {useState} from 'react'

import {
  Container,
  Heading,
  Image,
  ReadMoreButton,
  Description,
} from './styledComponents'

const ReadMore = props => {
  const [isClicked, toggleIsClicked] = useState(false)
  const {reactHooksDescription} = props
  const lessDescription = reactHooksDescription.slice(0, 171)
  const onClickOfBtn = () => {
    toggleIsClicked(prevState => !prevState)
  }
  const btnText = isClicked ? 'Read Less' : 'Read More'
  const description = isClicked ? reactHooksDescription : lessDescription
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>Hooks are a new addition to React</Description>
      <Description>{description}</Description>
      <ReadMoreButton type="button" onClick={onClickOfBtn}>
        {btnText}
      </ReadMoreButton>
    </Container>
  )
}

export default ReadMore
