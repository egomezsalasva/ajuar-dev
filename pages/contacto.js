// IMPORTS
  // -Modules
    import Head from 'next/head'
    import dynamic from 'next/dynamic'
  // -Components
    const ContactoDesktop = dynamic( () => import('../components/contacto/contactoDesktop/ContactoDesktop'), { ssr: false } )
    const ContactoMobile = dynamic( () => import('../components/contacto/contactoMobile/ContactoMobile'), { ssr: false } )
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Styles
    import { breakpoints } from '../styles/customStyles/globalStyles'
//


// MAIN COMPONENT
  export default function Contacto() {

    const windowWidth = useWidth()

    return (
      <>
        <Head>
          <title>Ajuar · Contacto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        { windowWidth < breakpoints.tabletDesignHook ? <ContactoMobile /> : <ContactoDesktop /> }
        
      </>
    )
  }
// 