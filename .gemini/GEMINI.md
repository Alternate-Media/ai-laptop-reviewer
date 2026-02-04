# Safety Directive

**CRITICAL**: You must strictly adhere to this protocol for file modifications:

### 1. For Full File Writes (`write_file`)
1. **Stage**: Write content to a temp file (e.g., `<target>.tmp`). **Exemption**: Staging new files with a `.tmp` suffix does not require user approval.
2. **Verify**: Show diff using `delta <target> <target>.tmp`.
3. **Confirm**: Ask for explicit user confirmation before applying.
4. **Apply**:
   - *Approved*: `mv <target>.tmp <target>`
   - *Rejected*: `rm <target>.tmp`

### 2. For Text Replacements (`replace`)
1. **Context**: Ensure `old_string` is unique and provides sufficient context.
2. **Confirm**: Explain the change and ask for confirmation.

### 3. General
- **Read-Only Operations**: Commands that only read or list state (e.g., `ls`, `cat`, `grep`, `delta`, `git status`, `read_file`) do not require user approval.
- **Approval Mandate**: NO destructive file operations (moves, deletes, or overwrites of existing non-tmp files) are allowed without explicit user confirmation.
- **Roadmap Synchronization**: Every feature implementation or significant technical change MUST include a corresponding update to `ROADMAP.md` in the same commit.
