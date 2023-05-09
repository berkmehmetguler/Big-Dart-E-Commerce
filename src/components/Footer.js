'use client'
// import React from 'react'

// const Footer = () => {
//   return (
//     <footer>
//         <div className="flex flex-col items-center justify-center py-4 text-gray-400 bg-gray-900">
//             <div className="container flex flex-row gap-4 p-4"> 
//                 <div>
//                         Div 1
//                 </div>
//                 <div>
//                         Div 2
//                 </div>
//                 <div>
//                         Div 3
//                 </div>
//                 <div>
//                         Div 4
//                 </div>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer


import React from 'react';
import Link from 'next/link';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className=' ' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4 text-center'>
          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='/' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase border-b-2 pb-2'>HIZLI ERİŞİM</h5>
                <ul className='list-unstyled p-2 mb-0'>
                    <li className='p-2'>
                    <Link href='/' className='text-white'>
                        Anasayfa
                    </Link>
                    </li>
                    <li className='p-2'>
                    <Link href='/' className='text-white'>
                        İndirimdekiler
                    </Link>
                    </li>
                    <li className='p-2'>
                    <Link href='/' className='text-white'>
                        Müşteri Hizmetleri
                    </Link>
                    </li>
                    <li className='p-2'>
                    <Link href='/' className='text-white'>
                        Markalar
                    </Link>
                    </li>
                </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase border-b-2 pb-2'>KATEGORİLER</h5>

              <ul className='list-unstyled p-2 mb-0'>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    En Yeniler
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Giyim
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Teseddür
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Aksesuar
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Fırsat Ürünleri
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase border-b-2 pb-2'>Üye Ol</h5>

              <ul className='list-unstyled p-2 mb-0'>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Yeni Üyelik
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Şifremi Unuttum
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Hesabım
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                    Google ile Giriş Yap
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase border-b-2 pb-2'>İLETİŞİM VE SİPARİŞ</h5>

              <ul className='list-unstyled p-2 mb-0 '>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                  Telefon: 0212 504 05 07
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                  Whatsapp: +90 553 150 68 00
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/' className='text-white'>
                  Telefon: +90 553 150 68 00
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        <Link className='text-white' href='/'>
        © 2023 Copyright | Bigdart.com.tr
        </Link>
      </div>
    </MDBFooter>
  );
}