When building a project with Broccoli (`broccoli build foo`), Broccoli will
exit with an error if the target (`foo`) already exists. This module addresses
that minor annoyance by automatically removing the target.

More specifically, the argument immediately following `build` is assumed to be
the target, and will be `rm -rf`’d — so don’t do something foolhardy like
`broccoli build ~`.
