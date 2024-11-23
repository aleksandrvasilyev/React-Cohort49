import { BeanHead } from "beanheads/dist";

function ShowAvatar({ size }) {
  if (size > 1000) {
    return (
      <BeanHead
        accessory="roundGlasses"
        body="chest"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="angry"
        eyes="happy"
        facialHair="mediumBeard"
        graphic="vue"
        hair="short"
        hairColor="black"
        hat="none"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  } else if (size > 700 && size < 1000) {
    return (
      <BeanHead
        accessory="none"
        body="breasts"
        circleColor="blue"
        clothing="dress"
        clothingColor="green"
        eyebrows="raised"
        eyes="simple"
        facialHair="none"
        graphic="vue"
        hair="long"
        hairColor="pink"
        hat="none"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  } else if (size < 700) {
    return (
      <BeanHead
        accessory="shades"
        body="chest"
        circleColor="blue"
        clothing="tankTop"
        clothingColor="black"
        eyebrows="angry"
        eyes="leftTwitch"
        facialHair="stubble"
        graphic="react"
        hair="balding"
        hairColor="white"
        hat="beanie"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  }
}

export default ShowAvatar;
