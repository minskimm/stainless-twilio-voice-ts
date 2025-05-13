# Changelog

## 0.1.0-alpha.2 (2025-05-13)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/minskimm/stainless-twilio-voice-ts/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **client:** add withOptions helper ([9297580](https://github.com/minskimm/stainless-twilio-voice-ts/commit/92975809c683a6438df11ee5dfa1bd1f4d5313ab))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([a986f51](https://github.com/minskimm/stainless-twilio-voice-ts/commit/a986f513931bde71d2a792e3f2b417c901fcf6bb))
* more gracefully handle $refs and work around schema limitations ([0b8ca1f](https://github.com/minskimm/stainless-twilio-voice-ts/commit/0b8ca1fff3c059b23cd557eb8dc6f3edf3b390dc))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#11](https://github.com/minskimm/stainless-twilio-voice-ts/issues/11)) ([27780cb](https://github.com/minskimm/stainless-twilio-voice-ts/commit/27780cbafb5c9d56d4f7678155c1ed7904a557da))
* **client:** always overwrite when merging headers ([ab556dc](https://github.com/minskimm/stainless-twilio-voice-ts/commit/ab556dc470e087b669d54a8ffe9bc23bca76fd64))
* **client:** send `X-Stainless-Timeout` in seconds ([#8](https://github.com/minskimm/stainless-twilio-voice-ts/issues/8)) ([1be25e2](https://github.com/minskimm/stainless-twilio-voice-ts/commit/1be25e219994dfde788f80eee7407debafc48fb8))
* **client:** send all configured auth headers ([#15](https://github.com/minskimm/stainless-twilio-voice-ts/issues/15)) ([4952a09](https://github.com/minskimm/stainless-twilio-voice-ts/commit/4952a094777dbbd9c890a74b803ed244c9c1f407))
* **internal:** fix file uploads in node 18 jest ([c4a687f](https://github.com/minskimm/stainless-twilio-voice-ts/commit/c4a687fdfb83d8f97b4a5a7b3734196fc056813a))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([4c990c7](https://github.com/minskimm/stainless-twilio-voice-ts/commit/4c990c7610870b83f67dccd173359ead35c0388e))
* **mcp:** fix readEnv type error ([b32c46f](https://github.com/minskimm/stainless-twilio-voice-ts/commit/b32c46f58d04bf6bdf478d429af0c7c46ac372af))
* **mcp:** include all necessary env vars in client instantiation ([22a4642](https://github.com/minskimm/stainless-twilio-voice-ts/commit/22a464278bce9a7617efde84205d4278ff8e9d49))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([8d78e07](https://github.com/minskimm/stainless-twilio-voice-ts/commit/8d78e07342258ff3f856945b7ba512b852a2d82e))
* **mcp:** remove debug logging ([#13](https://github.com/minskimm/stainless-twilio-voice-ts/issues/13)) ([4d59351](https://github.com/minskimm/stainless-twilio-voice-ts/commit/4d59351b3deb97c1ddb68b6748498a6012d65b4f))


### Chores

* **build:** automatically build subpackages if present ([30a387c](https://github.com/minskimm/stainless-twilio-voice-ts/commit/30a387c36a40b11d4290f5e5449775152d5f5f5a))
* **ci:** add timeout thresholds for CI jobs ([5766435](https://github.com/minskimm/stainless-twilio-voice-ts/commit/5766435368bdf33906650c8ffc4b1a35bb50b5d3))
* **ci:** only use depot for staging repos ([6fca378](https://github.com/minskimm/stainless-twilio-voice-ts/commit/6fca378e1e65a58ee85a16c7ee94a835e6ccf477))
* **client:** drop support for EOL node versions ([92579c9](https://github.com/minskimm/stainless-twilio-voice-ts/commit/92579c9efc3913ada86111b2582c49b5b5665d57))
* **client:** minor internal fixes ([85005aa](https://github.com/minskimm/stainless-twilio-voice-ts/commit/85005aadeb3f60d41db723c047685ec27a9c1144))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#6](https://github.com/minskimm/stainless-twilio-voice-ts/issues/6)) ([ca7f2ad](https://github.com/minskimm/stainless-twilio-voice-ts/commit/ca7f2ad6b14cddec70465fa1b4345e61e8333e74))
* configure new SDK language ([#10](https://github.com/minskimm/stainless-twilio-voice-ts/issues/10)) ([1e9a513](https://github.com/minskimm/stainless-twilio-voice-ts/commit/1e9a513eaf4c75e717a329f2ffa31877c99df9f5))
* **internal:** add aliases for Record and Array ([#9](https://github.com/minskimm/stainless-twilio-voice-ts/issues/9)) ([cbd68d5](https://github.com/minskimm/stainless-twilio-voice-ts/commit/cbd68d50da4f31593a15f6d4e9fde9e2a78c2bf6))
* **internal:** codegen related update ([8a64808](https://github.com/minskimm/stainless-twilio-voice-ts/commit/8a648087e91bf744738a5a04c38f5e3aa709317f))
* **internal:** codegen related update ([37940d4](https://github.com/minskimm/stainless-twilio-voice-ts/commit/37940d423b5ff195e2ce9164ccad19aaee57b644))
* **internal:** codegen related update ([315c63b](https://github.com/minskimm/stainless-twilio-voice-ts/commit/315c63ba2f2265d642e3b5dcae063d040771e65f))
* **internal:** improve node 18 shims ([a2d569d](https://github.com/minskimm/stainless-twilio-voice-ts/commit/a2d569d61d5f12a76f31e4958e9f5fbaddcb8bcd))
* **internal:** reduce CI branch coverage ([8690311](https://github.com/minskimm/stainless-twilio-voice-ts/commit/8690311f3923aaa31ec399ee99534838984a28c8))
* **internal:** refactor utils ([d0bc849](https://github.com/minskimm/stainless-twilio-voice-ts/commit/d0bc84994833882e27e0fe40bc8f112fc93a6e2e))
* **internal:** share typescript helpers ([71ac2a5](https://github.com/minskimm/stainless-twilio-voice-ts/commit/71ac2a59307d7070c5e6a6c195e74f17409539d9))
* **internal:** upload builds and expand CI branch coverage ([ccacff1](https://github.com/minskimm/stainless-twilio-voice-ts/commit/ccacff188e4cc08febb0f0c0b5052cf620603eea))
* **package:** remove engines ([3be2d0a](https://github.com/minskimm/stainless-twilio-voice-ts/commit/3be2d0abe3de5794d07aaed3c438a3028230deea))
* **perf:** faster base64 decoding ([06f808f](https://github.com/minskimm/stainless-twilio-voice-ts/commit/06f808f90b5c02b6fc68b347b76fa6d8763115d5))
* **tests:** improve enum examples ([#16](https://github.com/minskimm/stainless-twilio-voice-ts/issues/16)) ([fd09bbc](https://github.com/minskimm/stainless-twilio-voice-ts/commit/fd09bbc90ee8c3dccaa8d1b52502789feb2ea605))
* **tests:** use node 22 for CI tests ([b61563b](https://github.com/minskimm/stainless-twilio-voice-ts/commit/b61563b2c49eb34cabcda2fc9012541f49b20720))


### Documentation

* add examples to tsdocs ([ddb25c0](https://github.com/minskimm/stainless-twilio-voice-ts/commit/ddb25c0e27726dc9be2744bbb6a5da6c5cf7a705))
* **mcp:** improve MCP readme docs ([#12](https://github.com/minskimm/stainless-twilio-voice-ts/issues/12)) ([789c8fd](https://github.com/minskimm/stainless-twilio-voice-ts/commit/789c8fdb94fd9e9924af716e7db6426bc3197f30))
* **mcp:** update env vars in README ([#14](https://github.com/minskimm/stainless-twilio-voice-ts/issues/14)) ([884b216](https://github.com/minskimm/stainless-twilio-voice-ts/commit/884b216c34dc380caa1f8cbfd21fd0aac32443e7))
* **readme:** fix typo ([1e1e5b7](https://github.com/minskimm/stainless-twilio-voice-ts/commit/1e1e5b795e357e2f24e1be0b5f7bf88c435f8bb4))
* remove or fix invalid readme examples ([c817b3c](https://github.com/minskimm/stainless-twilio-voice-ts/commit/c817b3cce426fbe232ffc4ad4092c2b30558b7b8))

## 0.1.0-alpha.1 (2025-03-20)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/minskimm/stainless-twilio-voice-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([2ad9874](https://github.com/minskimm/stainless-twilio-voice-ts/commit/2ad9874db1aecc47b41f0e02b9efd6ff15fa65e8))
* **api:** update via SDK Studio ([4be556c](https://github.com/minskimm/stainless-twilio-voice-ts/commit/4be556c2119429b65944d294c426caf8c3e8f67e))
* **api:** update via SDK Studio ([803ff81](https://github.com/minskimm/stainless-twilio-voice-ts/commit/803ff81bf57b8ac7d1e73b5ed918babfaeee3ffc))
* **api:** update via SDK Studio ([e19e5d0](https://github.com/minskimm/stainless-twilio-voice-ts/commit/e19e5d0fc38c1aef997fb8da76ba4d6ae2a961ec))
* **client:** accept RFC6838 JSON content types ([e1282fc](https://github.com/minskimm/stainless-twilio-voice-ts/commit/e1282fc480f9b5cac24514ef4aa01d189847fe8a))


### Bug Fixes

* **exports:** ensure resource imports don't require /index ([485e60d](https://github.com/minskimm/stainless-twilio-voice-ts/commit/485e60db88774834855c922a02c8bdc45f05bb59))
* **internal:** add mts file + crypto shim types ([4f93072](https://github.com/minskimm/stainless-twilio-voice-ts/commit/4f93072a2882d38e8eb4b454b441aac37b0f40a9))


### Chores

* **exports:** cleaner resource index imports ([eeaedc9](https://github.com/minskimm/stainless-twilio-voice-ts/commit/eeaedc94a0d7dd96ff7b3c4561844309c9e72d22))
* **exports:** stop using path fallbacks ([6de13bb](https://github.com/minskimm/stainless-twilio-voice-ts/commit/6de13bb415237e61d3ff87d4cd1da8a99797b6c7))
* go live ([#1](https://github.com/minskimm/stainless-twilio-voice-ts/issues/1)) ([1dc58e1](https://github.com/minskimm/stainless-twilio-voice-ts/commit/1dc58e1968fef190b2d3b80ee358e1b2dfda1e57))
* **internal:** minor client file refactoring ([ad540e2](https://github.com/minskimm/stainless-twilio-voice-ts/commit/ad540e23ff6e013a845d5555904faa85b8d6615b))
* **internal:** remove extra empty newlines ([09400c7](https://github.com/minskimm/stainless-twilio-voice-ts/commit/09400c79bce0ee2b99beab35be2003719624e83f))
* update SDK settings ([#3](https://github.com/minskimm/stainless-twilio-voice-ts/issues/3)) ([1e58848](https://github.com/minskimm/stainless-twilio-voice-ts/commit/1e588487da7cef951ec68faa529440b033e8e438))
