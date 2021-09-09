import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { CardHeader, Heading, Text, Flex, Image } from '../../../../components/Pancakeswap/uikit/src'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : theme.colors.gradients[background]};
`

const StyledCardHeader: React.FC<{
  earningTokenSymbol: string
  stakingTokenSymbol: string
  isAutoVault?: boolean
  isFinished?: boolean
}> = ({ earningTokenSymbol, stakingTokenSymbol, isFinished = false, isAutoVault = false }) => {
  const TranslateString = useI18n()
  const poolImageSrc = isAutoVault
    ? `cake-cake.svg`
    : `${earningTokenSymbol}-${stakingTokenSymbol}.svg`.toLocaleLowerCase()
  const isCakePool = earningTokenSymbol === 'CAKE' && stakingTokenSymbol === 'Waifu'
  const background = isCakePool ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return `${TranslateString(999, 'Auto')}`
    }
    if (isCakePool) {
      // manual Waifu
      return `${TranslateString(999, 'Manual')}`
    }
    // all other pools
    return `${TranslateString(318, 'Earn')}`
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return `${TranslateString(999, 'Automatic restaking')}`
    }
    if (isCakePool) {
      return `${TranslateString(999, 'Earn Waifu, stake Waifu')}`
    }
    return `${TranslateString(1070, 'Stake')} Waifu`
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading color={isFinished ? 'textDisabled' : 'body'} size="lg">
            {`${getHeadingPrefix()} ${earningTokenSymbol}`}
          </Heading>
          <Text color={isFinished ? 'textDisabled' : 'textSubtle'}>{getSubHeading()}</Text>
        </Flex>
        <Image src={`/images/pools/${poolImageSrc}`} alt={earningTokenSymbol} width={64} height={64} />
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
