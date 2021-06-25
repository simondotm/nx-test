
const text = 'text'
//const t = 'Example ' + text     // this works fine, 'date-fns' IS correctly detected as a static dependency
//const t = `Example`             // this works fine, 'date-fns' IS correctly detected as a static dependency
const t = `Example ${text}`   // with this line before the import, 'date-fns' is NOT detected as a static dependency

// We expect 'date-fns' to be a static npm dependency of this app
import * as datefns from 'date-fns'

//const t = `Example ${text}`   // with this line AFTER the import, 'date-fns' IS detected as a static dependency, but camelcase isn't

// We expect 'camelcase' to be a static npm dependency of this app
import * as camelcase from 'camelcase'


export function nodelib3(): string {
  return 'nodelib3';
}
