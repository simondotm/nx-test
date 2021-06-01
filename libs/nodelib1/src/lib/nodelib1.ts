import * as nodelib2 from '@myorg/nodelib2'
console.log(nodelib2.nodelib2())
import * as nodelib3 from '@myorg/nodelib3'
console.log(nodelib3.nodelib3())

import { TEST } from '@myorg/nodelib3/test'
console.log(TEST)


export function nodelib1(): string {
  return 'nodelib1';
}
