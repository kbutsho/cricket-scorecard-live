
import Image from "next/image";
import photo1 from '@/assets/photo1.png';
import photo2 from '@/assets/2.png';
import photo3 from '@/assets/3.png';
import photo4 from '@/assets/4.png';
import photo5 from '@/assets/5.png';
import photo6 from '@/assets/6.png';
import photo7 from '@/assets/7.png';
import photo8 from '@/assets/8.png';
import photo9 from '@/assets/9.png';
import photo10 from '@/assets/10.png';
import photo11 from '@/assets/11.png';
import photo12 from '@/assets/12.png';
import photo13 from '@/assets/13.png';
import photo14 from '@/assets/14.png';
import photo15 from '@/assets/15.png';
import photo16 from '@/assets/16.png';
import photo17 from '@/assets/17.png';
import photo18 from '@/assets/18.png';
import photo19 from '@/assets/19.png';
import photo20 from '@/assets/20.png';
import photo21 from '@/assets/21.png';
import photo22 from '@/assets/22.png';
import photo23 from '@/assets/23.png';
import photo25 from '@/assets/25.png';
import photo26 from '@/assets/26.png';
import photo27 from '@/assets/27.png';
import photo28 from '@/assets/28.png';
import photo29 from '@/assets/29.png';
import photo30 from '@/assets/30.png';
import photo31 from '@/assets/31.png';
import photo32 from '@/assets/32.png';
import photo33 from '@/assets/33.png';
import photo34 from '@/assets/34.png';
import Head from "next/head";



const index = () => {

  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
    photo21, photo22, photo23, photo25, photo26, photo27, photo28, photo29, photo30, photo31,
    photo32, photo33, photo34]

  // const photoDiv = images.map((i, index) => {
  //   return (
  //     <div className="my-4" key={index}>
  //       <Image src={i} layout="responsive" height={100} width={100} alt="img" />
  //     </div>
  //   )
  // })

  return (
    <div style={{ background: "black", color: "white" }}>
      <Head>
        <title>Cricket match management</title>
      </Head>

      <div className="container py-5">
        <h3 className="fw-bold"><a href="https://github.com/Kbutsho/cricket-scorecard" target="_blank">Cricket match management web application</a></h3>
        <h4 className="my-3 fw-bold">Overview</h4>
        <p>This web application is built using the Laravel framework, offering a comprehensive solution for managing cricket matches, teams, players, and live match scores. It empowers administrators to effortlessly create and oversee cricket-related data, all from a centralized dashboard. Meanwhile, cricket enthusiasts and fans can stay up-to-date with live match scores through a user-friendly public page.</p>

        <h4 className="my-3 fw-bold">Installation</h4>
        <span>Follow these simple steps to get the Cricket Match Management Web Application up and running on your local environment:</span>
        <ul>
          <li><a className="fw-bold text-white" href="https://github.com/Kbutsho/cricket-scorecard" style={{ textDecoration: "none" }}>Clone the Repository:</a> Use git clone to clone this repository to your local machine.</li>
          <li><span className="fw-bold">Install Dependencies:</span> Run composer install to install the necessary PHP dependencies and npm install to install the JavaScript dependencies.</li>
          <li><span className="fw-bold">Database Configuration:</span> Set up your database configuration in the .env file and run the necessary migrations and seeders.</li>
          <li><span className="fw-bold">Start the Application:</span> Run php artisan serve to start the development server.</li>
          <li><span className="fw-bold">Access the Application:</span> Open your web browser and go to http://localhost:8000 to access the application.</li>
        </ul>

        <h4 className="my-3 fw-bold">Features</h4>
        <ul>
          <li><span className="fw-bold">Admin Dashboard:</span> Administrators can create and manage venues, teams, and players with ease, ensuring all cricket-related information is up-to-date and accurate.</li>
          <li><span className="fw-bold">Live Match Score Control: </span>Admin dashboard provides the input and control live match scores in real-time, enhancing the engagement and excitement of cricket matches.</li>
          <li> <span className="fw-bold">Public Live Scores:</span> Cricket fans and users can access a dedicated public page to view live match scores, ensuring they never miss a moment of the action.</li>
        </ul>

        <h4>Screenshots</h4>
        {
          images.map((i, index) => (
            <div key={index}>
              <Image className="my-4" src={i} layout="responsive" height={100} width={100} alt="img" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default index;