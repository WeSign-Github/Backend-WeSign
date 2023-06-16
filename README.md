<a name="readme-top"></a>

<br />
<div align="center">
  <img width="100px" src="https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/198ec81d-199c-4159-b630-86f957521bf9" alt="Logo">

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
        <li><a href="#endpoint-api">Endpoint API</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#cloud-architecture">Cloud Architecture</a></li>
        <li><a href="#erd">ERD</a></li>
        <li><a href="#api-docs">API Docs</a></li>
        <li><a href="#cc-members">CC Members</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



## About The Project
<div align="center">
  <img src="https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/4c08e25f-24fd-4fa6-97a4-ba9a3fd8b663" alt="Screenshot">
</div>

The project aims to create an inclusive and accessible platform that bridges the communication gap between the hearing and the deaf community. By leveraging advanced technology and sign language interpretation, WeSign enables seamless communication and promotes equal opportunities for individuals with hearing impairments. Our mission is to empower the deaf community by providing a digital space where they can express themselves, access information, and connect with others in a way that is natural and meaningful to them. Through innovation and collaboration, WeSign is revolutionizing the way we communicate, ensuring that everyone has a voice and can be heard.


### Endpoint API
``
https://wesign-backend-jzcjkn2yka-et.a.run.app/
``


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



### Cloud Architecture
![cc-Cloud Infrastucture drawio](https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/4ca4d188-90a8-43d5-aab3-3e849cfcaeba)


### ERD
![cc-ERD drawio](https://github.com/WeSign-Github/Backend-WeSign/assets/49114801/fbeb8a99-9a69-448c-ae95-01f9fff86818)


### API Docs

In this section, you can find the API documentation for the WeSign backend. The API documentation is generated using Swagger and OpenAPI. The API documentation is available at [base_domain/api/docs](base_domain/api/docs).


### CC Members


| Name | Class | ID |
|------|-------|----|
| [Muh Zaki Choiruddin](https://www.linkedin.com/in/muh-zaki-choiruddin)   | CC-54    | C136DSX1999 |
| [Talitha Nabila](https://www.linkedin.com/in/talitha-nabila/)   | CC-50    | C360DSY1942 |



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






<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/

[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://mysql.com/
