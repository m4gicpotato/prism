/**
 * Result for the getVersion function.
 *
 * @property api_version - API version info.
 * @property api_version_major - Major part of the API version.
 * @property api_version_minor - Minor part of the API version.
 * @property beam_branch_name - BEAM branch name on top of which API is built.
 * @property beam_commit_hash - BEAM commit hash on top of which API is built.
 * @property beam_version - BEAM version info on top of which API is built.
 * @property beam_version_major - Major part of the BEAM version.
 * @property beam_version_minor - Minor part of the BEAM version.
 * @property beam_version_rev - Revision part of the BEAM version.
 */
export interface GetVersionResult {
  api_version: string;
  api_version_major: number;
  api_version_minor: number;
  beam_branch_name: string;
  beam_commit_hash: string;
  beam_version: string;
  beam_version_major: number;
  beam_version_minor: number;
  beam_version_rev: number;
}
