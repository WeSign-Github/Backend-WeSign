<a name="readme-top"></a>

<br />
<div align="center">
  <!-- <img src="https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/c5c031c9-f81a-4a94-a4da-dbb7fb8053d9" alt="Logo"> -->
  
  <h3 align="center">WeSign</h3>

  <p align="center">
    Breaking Barriers, One Sign at a Time
    <br />
    <a href="https://github.com/WeSign-Github/Backend-WeSign"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project

<!-- ![wesign-shot](https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/8268f658-420e-4113-b14b-5a4f93d56574) -->

The project aims to create an inclusive and accessible platform that bridges the communication gap between the hearing and the deaf community. By leveraging advanced technology and sign language interpretation, WeSign enables seamless communication and promotes equal opportunities for individuals with hearing impairments. Our mission is to empower the deaf community by providing a digital space where they can express themselves, access information, and connect with others in a way that is natural and meaningful to them. Through innovation and collaboration, WeSign is revolutionizing the way we communicate, ensuring that everyone has a voice and can be heard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

These technologies have been carefully chosen to ensure a powerful and efficient foundation for the project, enabling seamless development and delivering a high-quality user experience.

* <p>Backend</p>
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![MySQL][MySQL]][MySQL-url]

* <p>Infrastructure as a Code</p>
[![Terraform](https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)

* <p>Cloud platform</p>
[![Cloud Run](https://img.shields.io/badge/Cloud_Run-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/run)
[![Cloud SQL](https://img.shields.io/badge/Cloud_SQL-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/sql)
[![Cloud Storage](https://img.shields.io/badge/Cloud_Storage-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/storage)
[![Artifact Registry](https://img.shields.io/badge/Artifact_Registry-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/artifact-registry)
[![Cloud Build](https://img.shields.io/badge/Cloud_Build-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/build)
[![Secret Manager](https://img.shields.io/badge/Secret_Manager-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/secret-manager)

* <p>Api Docs</p>
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)](https://swagger.io/)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapi-initiative&logoColor=white)](https://www.openapis.org/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Cloud Architecture


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### ERD


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following software installed on your system:
* Node.js: [Download and Install Node.js](https://nodejs.org/)
* MySQL: [Download and Install MySQL](https://www.mysql.com/downloads/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WeSign-Github/Backend-WeSign.git
   ```
2. Move to Backend-WeSign directory
   ```sh
   cd Backend-WeSign
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Copy `.env.example` to `.env` and configure
   ```js
    PORT=

    DB_HOST=
    DB_NAME=
    DB_USER=
    DB_PASS=

    FIREBASE_SERVICE_ACCOUNT_KEY=
   ```

 5. Start MySQL

 6. Run backend application
    ```sh
    npm run dev
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## API Docs

In this section, you can find the API documentation for the WeSign backend. The API documentation is generated using Swagger and OpenAPI. The API documentation is available at [https://wesign-backend.herokuapp.com/api-docs](https://wesign-backend.herokuapp.com/api-docs).


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://mysql.com/