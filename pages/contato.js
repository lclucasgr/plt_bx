import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
        <PageTitle title='{contato}' />
          <h1>Contato</h1>

          <div>
              <Link href='/'>Home</Link>
          </div>
        </div>
    )
}

export default Contato