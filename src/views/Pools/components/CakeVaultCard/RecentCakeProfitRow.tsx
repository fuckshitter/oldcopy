import React from 'react'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import RecentCakeProfitBalance from './RecentCakeProfitBalance'
import { Flex, Text } from '../../../../components/Pancakeswap/uikit/src'

interface RecentCakeProfitRowProps {
  account: string
  cakeAtLastUserAction: BigNumber
  userShares: BigNumber
  pricePerFullShare: BigNumber
}

const RecentCakeProfitCountdownRow: React.FC<RecentCakeProfitRowProps> = ({
  account,
  cakeAtLastUserAction,
  userShares,
  pricePerFullShare,
}) => {
  const TranslateString = useI18n()
  const shouldDisplayCakeProfit =
    account && cakeAtLastUserAction && cakeAtLastUserAction.gt(0) && userShares && userShares.gt(0)

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{TranslateString(999, 'Recent Waifu profit:')}</Text>
      {shouldDisplayCakeProfit && (
        <RecentCakeProfitBalance
          cakeAtLastUserAction={cakeAtLastUserAction}
          userShares={userShares}
          pricePerFullShare={pricePerFullShare}
        />
      )}
    </Flex>
  )
}

export default RecentCakeProfitCountdownRow
