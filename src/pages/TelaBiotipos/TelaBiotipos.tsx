import { DivCentralizadora } from '../../components/DivCentralizadora/DivCentralizadora.styles';
import { Div2Styled } from '../../components/Div2/Div2.styles';
import { SubDiv } from '../../components/SubDiv/SubDiv.styles';
import { Header } from '../../components/Header/Header'
import { ImgStyled } from '../../components/Imagens/Imagens.styles';
import { TextoBase } from '../../components/TextoBase/TextoBase.styles';
import { SubtituloStyled } from '../../components/Subtitulo/Subtitulo.styles';
import { TesteBiotipo } from '../../components/TesteBiotipo/TesteBiotipo';
import { TituloBase } from '../../components/TituloBase/TituloBase';
import * as S from './TelaBiotipos.styles'
import React from 'react';
import { Footer } from '../../components/Footer/Footer';

export const TelaBiotipos = () => {
    return(
        <>
            <Header />
            <DivCentralizadora>
                <TituloBase>TIPOS DE BIOTIPOS</TituloBase>
                <TextoBase>Os biotipos corporais podem ser classificados de acordo com as suas características. Os principais biotipos são: ectomorfo, endomorfo e mesomorfo.</TextoBase>
                <TextoBase>Abaixo você encontrará dicas para descobrir o seu.</TextoBase>
                <hr />
                <SubDiv>
                    <SubtituloStyled>Ectomorfo</SubtituloStyled>
                    <TextoBase>
                        As pessoas com o biotipo corporal ectomorfo apresentam corpo mais magro e esguio, ombros estreitos e membros compridos. 
                        Além disso, as mulheres apresentam quadril mais estreito e seios com  pouco músculo e pouca gordura.
                    </TextoBase>
                    <Div2Styled>
                        <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/ectomorfo.png?raw=true'/>
                    </Div2Styled>
                    <TextoBase>
                        Além de apresentar um metabolismo mais rápido e, por isso, são capazes de perder peso mais facilmente, mas têm mais
                        dificuldade para ganhar massa muscular.
                    </TextoBase>
                </SubDiv>
                <SubDiv>
                    <SubtituloStyled>Endomorfo</SubtituloStyled>
                    <TextoBase>
                        As pessoas com biotipo corporal endomorfo apresentam baixa estatura, corpo mais arredondado e mais largo, de forma
                        que as mulheres com esse biotipo apresentam quadril mais largo, associado ao formato de uma pera, e maior quantidade
                        de gordura acumulada.
                    </TextoBase>
                    <Div2Styled>
                        <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/endomorfo.png?raw=true'/>
                    </Div2Styled>
                    <TextoBase>
                        Além de apresentarem metabolismo mais lento, maior acúmulo de gordura e têm mais dificuldade para perder peso,
                        apesar de maior facilidade para ganhar massa muscular.
                    </TextoBase>
                </SubDiv>
                <SubDiv>
                    <SubtituloStyled>Mesomorfo</SubtituloStyled>
                    <TextoBase>
                        As pessoas com biotipo corporal mesomorfo possuem o corpo magro e musculoso, mesmo que não pratiquem atividade
                        física com frequência. Além disso, as pessoas com esse biotipo possuem o tronco mais desenvolvido, pouca gordura
                        abdominal, cintura mais fina e metabolismo mais rápido, além de ganhar massa muscular com facilidade.
                    </TextoBase>
                    <Div2Styled>
                        <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/mesomorfo.png?raw=true'/>
                    </Div2Styled>
                    <TextoBase>
                        A pessoa com características mesomórficas, também pode ganhar gordura corporal. Por isso, o consumo de açúcar refinado,
                        de alimentos industrializados, e alimentos gordurosos.
                    </TextoBase>
                </SubDiv>
            </DivCentralizadora>
            <S.SectionTeste>
                <TituloBase style={{ color: 'white' }}>TESTE</TituloBase>
                <TextoBase style={{ color: 'white' }}>
                    Se mesmo assim você não conseguir identificar, é possível fazer um teste rápido que consiste em abraçar o pulso com o dedo médio
                    e o polegar. Assim como na imagem abaixo:
                </TextoBase>
                <TesteBiotipo />
                <TextoBase style={{ color: 'white' }}>Importante: esse teste não é oficial, mas pode te ajudar a ter uma noção do seu biotipo.</TextoBase>
            </S.SectionTeste>
            <Footer />
        </>
    )
}