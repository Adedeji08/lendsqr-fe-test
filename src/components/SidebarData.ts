import {ReactComponent as Users} from '../assets/user-friends 1.svg'
import {ReactComponent as Guarantor} from '../assets/users 1.svg';
import {ReactComponent as Loan} from '../assets/sack 1 (1).svg';
import {ReactComponent as Shake} from '../assets/handshake-regular-1.svg'
import {ReactComponent as Save} from '../assets/piggy-bank-1.svg';
import {ReactComponent as Req} from '../assets/sack 1.svg';
import {ReactComponent as List} from '../assets/user-check 1.svg';
import {ReactComponent as Karma} from '../assets/user-times 1.svg'

import {ReactComponent as Org} from '../assets/Buz/briefcase 1.svg'
import {ReactComponent as GroupL} from '../assets/Buz/Group 104.svg'
import {ReactComponent as Spro} from '../assets/Buz/np_bank_148501_000000 1.svg'
import {ReactComponent as Fees} from '../assets/Buz/coins-solid 1.svg'
import {ReactComponent as Transact} from '../assets/Buz/icon.svg'
import {ReactComponent as Services} from '../assets/Buz/galaxy 1.svg'
import {ReactComponent as Account} from '../assets/Buz/user-cog 1.svg';
import {ReactComponent as Settle} from '../assets/Buz/scroll 1.svg'
import {ReactComponent as Report} from '../assets/Buz/chart-bar 2.svg'

import {ReactComponent as Pref} from '../assets/settings/sliders-h 1.svg'
import {ReactComponent as Pricing} from '../assets/settings/badge-percent 1.svg'
import {ReactComponent as Clip} from '../assets/settings/clipboard-list 1.svg'



export const customers=[
    {
        id: 1,
        path:"/users",
        name:"Users",
        Icon: Users
    },
    {
        id: 2,
        path:"/",
        name:"Guarantors",
        Icon: Guarantor
    },
    {
        id: 3,
        path:"/analytics",
        name:"Loans",
        Icon: Loan
    },
    {
      id: 4,
      path:"/comment",
      name:"Decision Models",
      Icon: Shake
  },
    {
        id: 5,
        path:"/comment",
        name:"Savings",
        Icon: Save
    },
    {
        id: 6,
        path:"/product",
        name:"Loan Requests",
        Icon: Req
    },
    {
        id: 7,
        path:"/productList",
        name:"Whitelist",
        Icon: List
    },
    {
        id: 8,
      path:"/productList",
      name:"Karma",
      Icon: Karma
  }
]

export const business=[
    {
        path:"/",
        name:"Organization",
        Icon: Org
    },
    {
        path:"/about",
        name:"Loan Products",
        Icon: GroupL
    },
    {
        path:"/analytics",
        name:"Savings Products",
        Icon: Spro
    },
    {
      path:"/comment",
      name:"Fees and Charges",
      Icon: Fees
  },
    {
        path:"/comment",
        name:"Transactions",
        Icon: Transact
    },
    {
        path:"/product",
        name:"Services",
        Icon: Services
    },
    {
        path:"/productList",
        name:"Service Account",
        Icon: Account
    },
    {
      path:"/productList",
      name:"Settlements",
      Icon: Settle
  },
  {
    path:"/productList",
    name:"Reports",
    Icon: Report
}
]

export const settings=[
    {
        path:"/",
        name:"Preferences",
        Icon: Pref
    },
    {
        path:"/about",
        name:"Fees and Pricing",
        Icon: Pricing
    },
    {
        path:"/analytics",
        name:"Audit Logs",
        Icon: Clip
    },
   
]