[![Actions Status](https://github.com/TenKeyLabs/react-number-format/workflows/CI/badge.svg)](https://github.com/TenKeyLabs/react-number-format/actions)

# @withmantle/react-number-format

React Number Format is an input-formatter library with a sophisticated and light weight caret engine. It ensures that a user can only enter text that meets specific numeric or string patterns, and formats the input value for display.

> **Note:** This is a [TenKeyLabs](https://github.com/TenKeyLabs) fork of [s-yadav/react-number-format](https://github.com/s-yadav/react-number-format), published as `@withmantle/react-number-format`.

### Features

1. Prefix, suffix and thousands separator.
1. Input Masking.
1. Format number in an input or format as a simple text.
1. Custom pattern formatting.
1. Custom formatting handler.
1. Fully customizable

### Install

Using `npm`

```
npm install @withmantle/react-number-format
```

Using `yarn`

```
yarn add @withmantle/react-number-format
```

### Usage

Numeric Format

```js
import { NumericFormat } from '@withmantle/react-number-format';
```

Pattern Format

```js
import { PatternFormat } from '@withmantle/react-number-format';
```

### Documentation

See the [upstream documentation](https://s-yadav.github.io/react-number-format/docs/intro) for full API reference:

- [NumericFormat Props](https://s-yadav.github.io/react-number-format/docs/numeric_format)
- [PatternFormat Props](https://s-yadav.github.io/react-number-format/docs/pattern_format)
- [v4 to v5 Migration Guide](https://s-yadav.github.io/react-number-format/docs/migration)

### Development

- Clone the repository
- `nvm use` to switch to the correct Node version
- `yarn` to install dependencies
- `yarn start` to run example server (<http://localhost:8084/>)
- `yarn test` to run tests (vitest)
- `yarn build-ci` to build dist and type declarations

### Releasing

This project uses [changesets](https://github.com/changesets/changesets) to manage versioning and npm releases.

1. When making a change that should be released, add a changeset:
   ```
   npx changeset add
   ```
2. Select the semver bump type (patch / minor / major) and describe the change.
3. Commit the generated `.changeset/*.md` file along with your code changes.
4. When your PR merges to `master`, the CD workflow will either:
   - Open (or update) a **Version Packages** PR that bumps versions and updates changelogs, or
   - Publish to npm if the Version Packages PR has already been merged.
