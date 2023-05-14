# Prism

Prism is a TypeScript library that simplifies interaction with the Beam's
privacy network wallet API. It provides an abstract layer to communicate with
the wallet API, allowing developers to build applications that can perform
transactions, create addresses, and access information about the blockchain
network without dealing with raw API calls.

## Key Features

- **Simple and intuitive**: Prism provides a simple and intuitive interface for
  developers. It abstracts the complexity of dealing with the wallet API and
  provides easy-to-use methods.
- **Comprehensive**: Prism supports all the major functionalities provided by
  the Beam wallet API, including transaction management, address creation, asset
  management, and information retrieval about the network.
- **Type safety**: Prism is built with TypeScript, which provides type safety,
  better documentation, and improved development experience.

## Getting Started

### Prerequisites

- Deno runtime environment

### How to Use

Here's a simple example of how to use Prism:

```typescript
import { PrismClient } from "./mod.ts";

const prism = new PrismClient("http://127.0.0.1:10000");

// Call the methods provided by Prism
const { current_height } = await client.walletStatus();
console.log(`Current height: ${current_height}`);
```

[Wallet API documentation is available here.](https://github.com/BeamMW/beam/wiki/Beam-wallet-protocol-API-v7.3)

You can also check the `demo.ts` file for further information.

### Running Prism

Use Deno task to run Prism:

```bash
deno task start
```

## API Documentation

Please refer to the source code for detailed API documentation, including method
descriptions, parameter types, and return types.

## Contributing

We welcome contributions! Please see the issues in the GitHub repository for
tasks we are looking to work on. If you have any questions, please feel free to
ask.

## License

Prism is licensed under the MIT license. Please see the \`LICENSE\` file for
more details.
