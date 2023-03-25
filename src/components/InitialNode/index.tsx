import { useState } from 'react';
import { Handle, Position } from 'reactflow'

import * as S from './styles'

export function InitialNode() {
  const [leadDropDownStatus, setLeadDropDownStatus] = useState<boolean>(false)
  const [messageDropDownStatus, setMessageDropDownStatus] = useState<boolean>(false)
  const [leadOption, setLeadOption] = useState<string>("")
  const [messageOption, setMessageOption] = useState<string>("")

  function handleChangeOption(type: string, option: string) {
    if (type === "lead") {
      setLeadOption(option)
      setLeadDropDownStatus(false)
    }
    
    if (type === "message") {
      setMessageOption(option)
      setMessageDropDownStatus(false)
    }
  }

  return (
    <S.InitialNode>
      <S.TitleBox>
        <img src="./user-woman-fill.svg" alt="Ícone de cliente" />
        <S.NodeTitle>Cliente iniciar um chat</S.NodeTitle>
      </S.TitleBox>
      <S.DropDown>
        <S.NodeButton
          onClick={() => setLeadDropDownStatus(!leadDropDownStatus)}
        >
          {leadOption === "" ? <p>Selecione o tipo de lead</p> : leadOption} <S.ArrowDown />
        </S.NodeButton>
        {leadDropDownStatus &&
          <div>
            <S.DropDownButton onClick={() => handleChangeOption("lead", "Opção 1")}>Opção 1</S.DropDownButton>
            <S.DropDownButton onClick={() => handleChangeOption("lead", "Opção 2")}>Opção 2</S.DropDownButton>
            <S.DropDownButton onClick={() => handleChangeOption("lead", "Opção 3")}>Opção 3</S.DropDownButton>
          </div>
        }
      </S.DropDown>
      <S.Line />
      <S.DropDown>
        <S.NodeButton onClick={() => setMessageDropDownStatus(!messageDropDownStatus)}>
        {messageOption === "" ? <p>Selecione o tipo de mensagem</p> : messageOption}<S.ArrowDown />
        </S.NodeButton>
        {messageDropDownStatus &&
          <div>
            <S.DropDownButton onClick={() => handleChangeOption("message", "Opção 1")}>Opção 1</S.DropDownButton>
            <S.DropDownButton onClick={() => handleChangeOption("message", "Opção 2")}>Opção 2</S.DropDownButton>
            <S.DropDownButton onClick={() => handleChangeOption("message", "Opção 3")}>Opção 3</S.DropDownButton>
          </div>
        }
      </S.DropDown>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable />
    </S.InitialNode>
  );
}