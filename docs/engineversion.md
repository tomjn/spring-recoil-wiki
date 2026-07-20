---
title: "EngineVersion"
source_url: "https://springrts.com/wiki/EngineVersion"
categories:
  - "Engine_Dev"
---
# EngineVersion

<div id="spring-engine-version-explained" class="section mw-parser-output">

## Spring Engine Version Explained

### Stable

The current stable version is **106.0** (see [the Wiki template](/templates/engineversion-stable)), while the synced part is **106.0**. If you do not know what **sync** refers to in spring, you may read: [/wiki/Syncing_System](/syncing-system)

### Parts

names: **Major.Minor.Patchset (Additional)**

example: **106.0. (0.82.7-22-gb98590d Headless Sync-Debug)**

**Major**

You may think of these as a milestones. Big feature sets get introduced in these.

**Minor**

Mostly (bigger) bug-fixes, including synced ones.

**Patchset**

Minor, non sync-changing bug-fixes.

**Additional**

This contains everything that further specifies a build, but would not fit into a fixed version scheme, like indicator strings for special builds, or the exact SCM commit. It may be empty. As this part is specific to a binary, it usually omitted when specifying a spring version. It can be found in the main log.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [EngineVersion](https://springrts.com/wiki/EngineVersion).*
