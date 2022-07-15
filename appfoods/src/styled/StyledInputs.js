import styled from "styled-components";
import { OutlinedInput } from "@mui/material";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DivInput = styled.div`
  width: 360px;
  height: 72px;
  padding: 0 16px 8px;
`;
export const StyledInput = styled(FormControl)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
`;
export const StyledLabel = styled(InputLabel)`
  width: 78px;
  height: 18px;
  margin: 3px 234px 43px 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;
