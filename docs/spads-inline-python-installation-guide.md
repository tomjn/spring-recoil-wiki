---
title: "SPADS Inline::Python installation guide"
source_url: "https://springrts.com/wiki/SPADS_Inline::Python_installation_guide"
section: "hosting"
---
# SPADS Inline::Python installation guide

<div class="mw-parser-output">

## Introduction

`Inline::Python` is a Perl module which allows interactions between Perl code and Python code. SPADS uses it to communicate with plugins coded in Python. This document will detail the different ways to install `Inline::Python` on Linux and Windows.

## Installing Inline::Python on Linux

### Method 1: Using the package manager of your Linux distribution

This is the easiest way to install `Inline::Python` (if your distribution supports it), as it automatically downloads and installs a package specifically prepared for your distribution.

For this method you just need to find the name of the system package containing the `Inline::Python` Perl module and install it on your system.\
For example, for Debian based distributions: `apt-get install libinline-python-perl`\
For Red Hat based distributions: `dnf install perl-Inline-Python`

### Method 2: Using cpan

`cpan` is the standard tool included with Perl to install modules from the <a href="https://www.cpan.org/" class="external text" rel="nofollow">Comprehensive Perl Archive Network</a>.

To install the latest stable release of `Inline::Python` using `cpan`, enter following command (with root privileges if you are using the system Perl):\
`cpan Inline::Python`

## Installing Inline::Python on Windows

To install the latest stable release of `Inline::Python` using `cpanminus`, enter following command:\
`cpanm Inline::Python`

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [SPADS Inline::Python installation guide](https://springrts.com/wiki/SPADS_Inline::Python_installation_guide).*
