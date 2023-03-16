# contracts-integration-sdk

This is the workspace for integrating a smart contract into your frontend dapp.
Work is provided in advance both with 1 smart contract and with many contracts responsible for different business logic.

The essence of this approach is to isolate the ethers.js library from the common components of the application.
This is necessary for the competent design of the application architecture.
And give all the necessary development tools dapp signer, provider, contract (version object ethers.js)

##### The documentation is inside the codebase with examples! And it has convenient interactive tips available by hovering over types, variables, functions.
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/66336085/225490148-12f9f796-e051-4695-bc4f-6e1bc4b3e8f0.png">
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/66336085/225490330-55f72deb-d65a-4e05-a5b5-7823cb9ddb86.png">

#### This repository will undergo changes. I don't publish to npm. This will be done after the global refinement of the service

### Description:

As a result, to work with the business logic methods of your dapp contracts, 
you get a ContractAPI object that contains contract instances for ease of use in the application.

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/66336085/225489529-1d5e8da9-cd96-4599-8499-ad6b75dda347.png">
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/66336085/225489692-f87f1dab-d5d9-4053-9551-d45226e7735a.png">
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/66336085/225489902-4826a57b-2b47-4b15-bccb-8594eddb62fd.png">

## Recommendations:
I strongly recommend calling contract methods in middleware. Don't forget that all contract calls are asynchronous expressions. And there are behaviors that require you to first wait for the execution of some network request in order to later trigger another network request. You will need to build a controlled call queue for the correct behavior of the dapp. This will help you avoid a lot of bugs.

#### Always isolate network calls and business logic from UI components!
