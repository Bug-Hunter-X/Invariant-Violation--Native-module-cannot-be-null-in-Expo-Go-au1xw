# Invariant Violation: Native module cannot be null in Expo Go

This repository demonstrates a common error encountered when using Expo Go with libraries requiring native modules.  The error, `Invariant Violation: Native module cannot be null`, arises because Expo Go doesn't support native modules directly. This example shows how to reproduce the issue and offers a solution using Expo's managed workflow or EAS Build.

## Problem

Attempting to use a library that depends on native modules within an Expo app run through Expo Go will fail.  This is due to limitations in Expo Go's architecture.

## Solution

The primary solution is to avoid native modules if possible.  If this isn't feasible, consider these alternatives:

1. **Eject from Expo:** This grants full control, allowing native modules integration.  However, it loses many benefits of Expo's managed workflow.
2. **Expo's EAS Build:** This service builds your app with native modules support, generating a standalone APK or IPA that can be deployed.

This repository provides a minimal reproducible example illustrating the problem and its solution using EAS Build.