import React from "react";
import styled from "styled-components";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {BsCalendarCheck} from 'react-icons/bs';
import {Colors} from "../../services/enums";

const NavComponent = styled.div`
	position: absolute;
	bottom: 0;
	
	width: 100%;
`

const NavButton = styled.button`
  width: 50%;
  height: 70px;

  border: none;

  background-color: transparent;
  cursor: pointer;

  &.non-active {
    border-top: solid 1px rgba(0, 0, 0, 0.5);
    opacity: 30%;

    & > svg {
      fill: #6b6666;
    }
  }

  &:first-child.non-active {
    border-right: solid 1px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 20px;
  }

  &:last-child.non-active {
    border-left: solid 1px rgba(0, 0, 0, 0.5);
    border-bottom-right-radius: 20px;
  }
	
  @media (max-width: 600px) {
    height: 50px;

    & > svg {
      height: 20px;
      width: 20px;
    }
  }
`

export default function Nav() {
	return (
		<NavComponent>
			<NavButton>
				<AiOutlineUnorderedList size="24" fill={Colors.MAIN_COLOR}/>
			</NavButton>
			<NavButton className="non-active">
				<BsCalendarCheck size="24" fill={Colors.MAIN_COLOR}/>
			</NavButton>
		</NavComponent>
	)
}