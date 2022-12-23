import React, {HTMLInputTypeAttribute} from "react";
import styled from "styled-components";
import {Colors} from "../../services/enums";

const InputWrapper = styled.div`
  padding: 0 50px;
  margin-bottom: 40px;
  margin-top: 15px;

  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 25px;
  }
`

const InputComponent = styled.input.attrs<HTMLInputTypeAttribute>({placeholder: 'Write your todos here'})`
  width: 100%;

  border: 0;
  border-bottom: 1px solid #6b6666;

  font-family: inherit;
  font-size: inherit;
	font-weight: 600;
  line-height: inherit;
  text-align: center;

  margin: 0;
  padding: 15px;

  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &:focus {
    outline: 0;
    border-bottom-color: ${Colors.MAIN_COLOR};
    box-shadow: 0 3px 6px 4px rgba(202, 121, 170, 0.2);
  }
`

export default function Input() {
	return (
		<InputWrapper>
			<InputComponent/>
		</InputWrapper>
	)
}