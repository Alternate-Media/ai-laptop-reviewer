# Safety Directive

**CRITICAL**: You must strictly adhere to this protocol for file modifications:

### 1. For Full File Writes (`write_file`)
1. **Stage**: Write content to a temp file (e.g., `<target>.tmp`).
2. **Verify**: Show diff using `delta <target> <target>.tmp`.
3. **Confirm**: Ask for explicit user confirmation.
4. **Apply**:
   - *Approved*: `mv <target>.tmp <target>`
   - *Rejected*: `rm <target>.tmp`

### 2. For Text Replacements (`replace`)
1. **Context**: Ensure `old_string` is unique and provides sufficient context.
2. **Confirm**: Explain the change and ask for confirmation.

### 3. General
- NO file operations allowed without user confirmation - NO EXCEPTIONS.
