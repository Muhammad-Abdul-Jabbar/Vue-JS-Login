<template>
    <div class="terms-of-service">
      <h2>Terms of Service</h2>
      <div class="terms-content">
        <p>
          By using this application, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree to these terms, you should not use this application.
        </p>
        <p>
          The term 'Company' or 'us' or 'we' refers to the owner of the application whose registered office is [Your Company Address]. Our company registration number is [Your Company Registration Number].
        </p>
        <p>
          The term 'you' refers to the user or viewer of our application.
        </p>
        <p>
          The use of this application is subject to the following terms of use:
        </p>
        <ul>
          <li>The content of the pages of this application is for your general information and use only. It is subject to change without notice.</li>
          <li>This application uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [List of information].</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this application for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this application is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this application meet your specific requirements.</li>
          <li>This application contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
          <li>All trademarks reproduced in this application, which are not the property of, or licensed to the operator, are acknowledged on the application.</li>
          <li>Unauthorized use of this application may give rise to a claim for damages and/or be a criminal offense.</li>
          <li>From time to time, this application may also include links to other applications. These links are provided for your convenience to provide further information. They do not signify that we endorse the application(s). We have no responsibility for the content of the linked application(s).</li>
          <li>Your use of this application and any dispute arising out of such use of the application is subject to the laws of [Your Country].</li>
        </ul>
        <p>
          <strong>Note:</strong> Your use of this application constitutes acceptance of these terms and conditions.
        </p>
      </div>
      <button @click="acceptTerms">Accept</button>
    </div>
  </template>
  
  <script>
 export default {
    methods: {
      acceptTerms() {
        this.$router.push('/home');
        console.log("Terms of service accepted!");
      },
    },
  };
  </script>
  
  <style scoped>
  .terms-of-service {
    max-width: 2000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .terms-content {
    margin-bottom: 20px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  