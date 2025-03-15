import { GithubExplorerApi } from "@/modules/GithubExplorerApi";

const getUsersByUsername = async (params: SearchUserParams) => {
  // return {
  //   total_count: 639,
  //   incomplete_results: false,
  //   items: [
  //     {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //       score: 1,
  //     },
  //     {
  //       login: "ReaverTeknoGods",
  //       id: 2404814,
  //       node_id: "MDQ6VXNlcjI0MDQ4MTQ=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/2404814?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/ReaverTeknoGods",
  //       html_url: "https://github.com/ReaverTeknoGods",
  //       followers_url: "https://api.github.com/users/ReaverTeknoGods/followers",
  //       following_url:
  //         "https://api.github.com/users/ReaverTeknoGods/following{/other_user}",
  //       gists_url:
  //         "https://api.github.com/users/ReaverTeknoGods/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/ReaverTeknoGods/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/ReaverTeknoGods/subscriptions",
  //       organizations_url: "https://api.github.com/users/ReaverTeknoGods/orgs",
  //       repos_url: "https://api.github.com/users/ReaverTeknoGods/repos",
  //       events_url:
  //         "https://api.github.com/users/ReaverTeknoGods/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/ReaverTeknoGods/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //       score: 1,
  //     },
  //     {
  //       login: "reaver72",
  //       id: 75427075,
  //       node_id: "MDQ6VXNlcjc1NDI3MDc1",
  //       avatar_url: "https://avatars.githubusercontent.com/u/75427075?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reaver72",
  //       html_url: "https://github.com/reaver72",
  //       followers_url: "https://api.github.com/users/reaver72/followers",
  //       following_url:
  //         "https://api.github.com/users/reaver72/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reaver72/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reaver72/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/reaver72/subscriptions",
  //       organizations_url: "https://api.github.com/users/reaver72/orgs",
  //       repos_url: "https://api.github.com/users/reaver72/repos",
  //       events_url: "https://api.github.com/users/reaver72/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reaver72/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //       score: 1,
  //     },
  //     {
  //       login: "reavessm",
  //       id: 23387932,
  //       node_id: "MDQ6VXNlcjIzMzg3OTMy",
  //       avatar_url: "https://avatars.githubusercontent.com/u/23387932?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reavessm",
  //       html_url: "https://github.com/reavessm",
  //       followers_url: "https://api.github.com/users/reavessm/followers",
  //       following_url:
  //         "https://api.github.com/users/reavessm/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reavessm/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reavessm/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/reavessm/subscriptions",
  //       organizations_url: "https://api.github.com/users/reavessm/orgs",
  //       repos_url: "https://api.github.com/users/reavessm/repos",
  //       events_url: "https://api.github.com/users/reavessm/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reavessm/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //       score: 1,
  //     },
  //     {
  //       login: "Reavershark",
  //       id: 22033993,
  //       node_id: "MDQ6VXNlcjIyMDMzOTkz",
  //       avatar_url: "https://avatars.githubusercontent.com/u/22033993?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/Reavershark",
  //       html_url: "https://github.com/Reavershark",
  //       followers_url: "https://api.github.com/users/Reavershark/followers",
  //       following_url:
  //         "https://api.github.com/users/Reavershark/following{/other_user}",
  //       gists_url: "https://api.github.com/users/Reavershark/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/Reavershark/starred{/owner}{/repo}",
  //       subscriptions_url:
  //         "https://api.github.com/users/Reavershark/subscriptions",
  //       organizations_url: "https://api.github.com/users/Reavershark/orgs",
  //       repos_url: "https://api.github.com/users/Reavershark/repos",
  //       events_url: "https://api.github.com/users/Reavershark/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/Reavershark/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //       score: 1,
  //     },
  //   ],
  // };
  return GithubExplorerApi.get<SearchUserResponse>("/search/users", {
    q: params.query,
    per_page: params.per_page,
  });
};

const getReposByUsername = async (
  username: string,
  params: PaginationParams,
) => {
  // return [
  //   {
  //     id: 365909667,
  //     node_id: "MDEwOlJlcG9zaXRvcnkzNjU5MDk2Njc=",
  //     name: "ArrJanitor",
  //     full_name: "reave/ArrJanitor",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/ArrJanitor",
  //     description:
  //       "A python script designed to clean up Radarr/Sonarr downloads in Deluge.",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/ArrJanitor",
  //     forks_url: "https://api.github.com/repos/reave/ArrJanitor/forks",
  //     keys_url: "https://api.github.com/repos/reave/ArrJanitor/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/ArrJanitor/teams",
  //     hooks_url: "https://api.github.com/repos/reave/ArrJanitor/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/ArrJanitor/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/ArrJanitor/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/ArrJanitor/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/ArrJanitor/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/ArrJanitor/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/ArrJanitor/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/ArrJanitor/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/ArrJanitor/deployments",
  //     created_at: "2021-05-10T03:43:38Z",
  //     updated_at: "2021-05-10T03:43:39Z",
  //     pushed_at: "2021-03-12T11:35:50Z",
  //     git_url: "git://github.com/reave/ArrJanitor.git",
  //     ssh_url: "git@github.com:reave/ArrJanitor.git",
  //     clone_url: "https://github.com/reave/ArrJanitor.git",
  //     svn_url: "https://github.com/reave/ArrJanitor",
  //     homepage: "",
  //     size: 61,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 933890200,
  //     node_id: "R_kgDON6oImA",
  //     name: "catppuccin-obs",
  //     full_name: "reave/catppuccin-obs",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/catppuccin-obs",
  //     description: "⏺️ Soothing pastel theme for OBS Studio",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/catppuccin-obs",
  //     forks_url: "https://api.github.com/repos/reave/catppuccin-obs/forks",
  //     keys_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/catppuccin-obs/teams",
  //     hooks_url: "https://api.github.com/repos/reave/catppuccin-obs/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/catppuccin-obs/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/catppuccin-obs/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/statuses/{sha}",
  //     languages_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/catppuccin-obs/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/{archive_format}{/ref}",
  //     downloads_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/issues{/number}",
  //     pulls_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/notifications{?since,all,participating}",
  //     labels_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/catppuccin-obs/deployments",
  //     created_at: "2025-02-16T22:52:50Z",
  //     updated_at: "2025-02-16T22:52:50Z",
  //     pushed_at: "2024-10-13T08:43:12Z",
  //     git_url: "git://github.com/reave/catppuccin-obs.git",
  //     ssh_url: "git@github.com:reave/catppuccin-obs.git",
  //     clone_url: "https://github.com/reave/catppuccin-obs.git",
  //     svn_url: "https://github.com/reave/catppuccin-obs",
  //     homepage: "",
  //     size: 561,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: false,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: {
  //       key: "mit",
  //       name: "MIT License",
  //       spdx_id: "MIT",
  //       url: "https://api.github.com/licenses/mit",
  //       node_id: "MDc6TGljZW5zZTEz",
  //     },
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "main",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 933873911,
  //     node_id: "R_kgDON6nI9w",
  //     name: "catppuccin-powershell",
  //     full_name: "reave/catppuccin-powershell",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/catppuccin-powershell",
  //     description: "🔌 Soothing pastel theme for PowerShell",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/catppuccin-powershell",
  //     forks_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/forks",
  //     keys_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/collaborators{/collaborator}",
  //     teams_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/teams",
  //     hooks_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/issues/events{/number}",
  //     events_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/catppuccin-powershell/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/statuses/{sha}",
  //     languages_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/compare/{base}...{head}",
  //     merges_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/{archive_format}{/ref}",
  //     downloads_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/issues{/number}",
  //     pulls_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/notifications{?since,all,participating}",
  //     labels_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/catppuccin-powershell/deployments",
  //     created_at: "2025-02-16T21:50:44Z",
  //     updated_at: "2025-02-16T21:50:44Z",
  //     pushed_at: "2024-08-31T06:07:18Z",
  //     git_url: "git://github.com/reave/catppuccin-powershell.git",
  //     ssh_url: "git@github.com:reave/catppuccin-powershell.git",
  //     clone_url: "https://github.com/reave/catppuccin-powershell.git",
  //     svn_url: "https://github.com/reave/catppuccin-powershell",
  //     homepage: "",
  //     size: 50,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: false,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: {
  //       key: "mit",
  //       name: "MIT License",
  //       spdx_id: "MIT",
  //       url: "https://api.github.com/licenses/mit",
  //       node_id: "MDc6TGljZW5zZTEz",
  //     },
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "main",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 761855509,
  //     node_id: "R_kgDOLWj-FQ",
  //     name: "Collector",
  //     full_name: "reave/Collector",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/Collector",
  //     description:
  //       "Support tool for collecting logs. Intention is to be extensible and cross platform ",
  //     fork: false,
  //     url: "https://api.github.com/repos/reave/Collector",
  //     forks_url: "https://api.github.com/repos/reave/Collector/forks",
  //     keys_url: "https://api.github.com/repos/reave/Collector/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/Collector/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/Collector/teams",
  //     hooks_url: "https://api.github.com/repos/reave/Collector/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/Collector/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/Collector/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/Collector/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/Collector/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/Collector/tags",
  //     blobs_url: "https://api.github.com/repos/reave/Collector/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/Collector/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/Collector/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/Collector/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/Collector/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/Collector/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/Collector/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/Collector/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/Collector/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/Collector/subscription",
  //     commits_url: "https://api.github.com/repos/reave/Collector/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/Collector/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/Collector/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/Collector/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/Collector/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/Collector/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/Collector/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/Collector/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/Collector/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/reave/Collector/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/Collector/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/Collector/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/Collector/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/Collector/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/reave/Collector/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/Collector/deployments",
  //     created_at: "2024-02-22T16:05:00Z",
  //     updated_at: "2024-02-22T16:05:00Z",
  //     pushed_at: "2024-02-22T16:05:00Z",
  //     git_url: "git://github.com/reave/Collector.git",
  //     ssh_url: "git@github.com:reave/Collector.git",
  //     clone_url: "https://github.com/reave/Collector.git",
  //     svn_url: "https://github.com/reave/Collector",
  //     homepage: null,
  //     size: 14,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: true,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: {
  //       key: "gpl-3.0",
  //       name: "GNU General Public License v3.0",
  //       spdx_id: "GPL-3.0",
  //       url: "https://api.github.com/licenses/gpl-3.0",
  //       node_id: "MDc6TGljZW5zZTk=",
  //     },
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "main",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 200280195,
  //     node_id: "MDEwOlJlcG9zaXRvcnkyMDAyODAxOTU=",
  //     name: "Emailimo",
  //     full_name: "reave/Emailimo",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/Emailimo",
  //     description:
  //       "Small project that simplifies (according to me) sending colorful emails in PowerShell",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/Emailimo",
  //     forks_url: "https://api.github.com/repos/reave/Emailimo/forks",
  //     keys_url: "https://api.github.com/repos/reave/Emailimo/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/Emailimo/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/Emailimo/teams",
  //     hooks_url: "https://api.github.com/repos/reave/Emailimo/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/Emailimo/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/Emailimo/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/Emailimo/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/Emailimo/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/Emailimo/tags",
  //     blobs_url: "https://api.github.com/repos/reave/Emailimo/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/Emailimo/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/Emailimo/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/Emailimo/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/Emailimo/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/Emailimo/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/Emailimo/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/Emailimo/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/Emailimo/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/Emailimo/subscription",
  //     commits_url: "https://api.github.com/repos/reave/Emailimo/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/Emailimo/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/Emailimo/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/Emailimo/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/Emailimo/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/Emailimo/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/Emailimo/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/Emailimo/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/Emailimo/downloads",
  //     issues_url: "https://api.github.com/repos/reave/Emailimo/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/Emailimo/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/Emailimo/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/Emailimo/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/Emailimo/labels{/name}",
  //     releases_url: "https://api.github.com/repos/reave/Emailimo/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/Emailimo/deployments",
  //     created_at: "2019-08-02T18:24:55Z",
  //     updated_at: "2019-08-02T18:24:57Z",
  //     pushed_at: "2019-06-29T19:55:23Z",
  //     git_url: "git://github.com/reave/Emailimo.git",
  //     ssh_url: "git@github.com:reave/Emailimo.git",
  //     clone_url: "https://github.com/reave/Emailimo.git",
  //     svn_url: "https://github.com/reave/Emailimo",
  //     homepage: "",
  //     size: 39,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "PowerShell",
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 216929243,
  //     node_id: "MDEwOlJlcG9zaXRvcnkyMTY5MjkyNDM=",
  //     name: "Gaps",
  //     full_name: "reave/Gaps",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/Gaps",
  //     description: "Find the missing movies in your Plex Server",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/Gaps",
  //     forks_url: "https://api.github.com/repos/reave/Gaps/forks",
  //     keys_url: "https://api.github.com/repos/reave/Gaps/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/Gaps/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/Gaps/teams",
  //     hooks_url: "https://api.github.com/repos/reave/Gaps/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/Gaps/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/Gaps/events",
  //     assignees_url: "https://api.github.com/repos/reave/Gaps/assignees{/user}",
  //     branches_url: "https://api.github.com/repos/reave/Gaps/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/Gaps/tags",
  //     blobs_url: "https://api.github.com/repos/reave/Gaps/git/blobs{/sha}",
  //     git_tags_url: "https://api.github.com/repos/reave/Gaps/git/tags{/sha}",
  //     git_refs_url: "https://api.github.com/repos/reave/Gaps/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/Gaps/git/trees{/sha}",
  //     statuses_url: "https://api.github.com/repos/reave/Gaps/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/Gaps/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/Gaps/stargazers",
  //     contributors_url: "https://api.github.com/repos/reave/Gaps/contributors",
  //     subscribers_url: "https://api.github.com/repos/reave/Gaps/subscribers",
  //     subscription_url: "https://api.github.com/repos/reave/Gaps/subscription",
  //     commits_url: "https://api.github.com/repos/reave/Gaps/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/Gaps/git/commits{/sha}",
  //     comments_url: "https://api.github.com/repos/reave/Gaps/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/Gaps/issues/comments{/number}",
  //     contents_url: "https://api.github.com/repos/reave/Gaps/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/Gaps/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/Gaps/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/Gaps/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/Gaps/downloads",
  //     issues_url: "https://api.github.com/repos/reave/Gaps/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/Gaps/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/Gaps/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/Gaps/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/Gaps/labels{/name}",
  //     releases_url: "https://api.github.com/repos/reave/Gaps/releases{/id}",
  //     deployments_url: "https://api.github.com/repos/reave/Gaps/deployments",
  //     created_at: "2019-10-22T23:42:06Z",
  //     updated_at: "2019-10-22T23:42:07Z",
  //     pushed_at: "2019-10-22T23:31:06Z",
  //     git_url: "git://github.com/reave/Gaps.git",
  //     ssh_url: "git@github.com:reave/Gaps.git",
  //     clone_url: "https://github.com/reave/Gaps.git",
  //     svn_url: "https://github.com/reave/Gaps",
  //     homepage: "",
  //     size: 19619,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: {
  //       key: "mit",
  //       name: "MIT License",
  //       spdx_id: "MIT",
  //       url: "https://api.github.com/licenses/mit",
  //       node_id: "MDc6TGljZW5zZTEz",
  //     },
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 49072381,
  //     node_id: "MDEwOlJlcG9zaXRvcnk0OTA3MjM4MQ==",
  //     name: "get-Weather",
  //     full_name: "reave/get-Weather",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/get-Weather",
  //     description: null,
  //     fork: false,
  //     url: "https://api.github.com/repos/reave/get-Weather",
  //     forks_url: "https://api.github.com/repos/reave/get-Weather/forks",
  //     keys_url: "https://api.github.com/repos/reave/get-Weather/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/get-Weather/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/get-Weather/teams",
  //     hooks_url: "https://api.github.com/repos/reave/get-Weather/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/get-Weather/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/get-Weather/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/get-Weather/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/get-Weather/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/get-Weather/tags",
  //     blobs_url:
  //       "https://api.github.com/repos/reave/get-Weather/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/get-Weather/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/get-Weather/git/refs{/sha}",
  //     trees_url:
  //       "https://api.github.com/repos/reave/get-Weather/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/get-Weather/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/get-Weather/languages",
  //     stargazers_url:
  //       "https://api.github.com/repos/reave/get-Weather/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/get-Weather/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/get-Weather/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/get-Weather/subscription",
  //     commits_url:
  //       "https://api.github.com/repos/reave/get-Weather/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/get-Weather/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/get-Weather/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/get-Weather/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/get-Weather/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/get-Weather/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/get-Weather/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/get-Weather/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/get-Weather/downloads",
  //     issues_url:
  //       "https://api.github.com/repos/reave/get-Weather/issues{/number}",
  //     pulls_url:
  //       "https://api.github.com/repos/reave/get-Weather/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/get-Weather/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/get-Weather/notifications{?since,all,participating}",
  //     labels_url:
  //       "https://api.github.com/repos/reave/get-Weather/labels{/name}",
  //     releases_url:
  //       "https://api.github.com/repos/reave/get-Weather/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/get-Weather/deployments",
  //     created_at: "2016-01-05T14:54:22Z",
  //     updated_at: "2023-03-28T18:48:02Z",
  //     pushed_at: "2016-06-07T19:27:17Z",
  //     git_url: "git://github.com/reave/get-Weather.git",
  //     ssh_url: "git@github.com:reave/get-Weather.git",
  //     clone_url: "https://github.com/reave/get-Weather.git",
  //     svn_url: "https://github.com/reave/get-Weather",
  //     homepage: null,
  //     size: 4,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "PowerShell",
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 1,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 1,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 1,
  //     open_issues: 1,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 221541020,
  //     node_id: "MDEwOlJlcG9zaXRvcnkyMjE1NDEwMjA=",
  //     name: "ip_scan",
  //     full_name: "reave/ip_scan",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/ip_scan",
  //     description: "Scan a list of IPs quickly using multithreading",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/ip_scan",
  //     forks_url: "https://api.github.com/repos/reave/ip_scan/forks",
  //     keys_url: "https://api.github.com/repos/reave/ip_scan/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/ip_scan/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/ip_scan/teams",
  //     hooks_url: "https://api.github.com/repos/reave/ip_scan/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/ip_scan/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/ip_scan/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/ip_scan/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/ip_scan/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/ip_scan/tags",
  //     blobs_url: "https://api.github.com/repos/reave/ip_scan/git/blobs{/sha}",
  //     git_tags_url: "https://api.github.com/repos/reave/ip_scan/git/tags{/sha}",
  //     git_refs_url: "https://api.github.com/repos/reave/ip_scan/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/ip_scan/git/trees{/sha}",
  //     statuses_url: "https://api.github.com/repos/reave/ip_scan/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/ip_scan/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/ip_scan/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/ip_scan/contributors",
  //     subscribers_url: "https://api.github.com/repos/reave/ip_scan/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/ip_scan/subscription",
  //     commits_url: "https://api.github.com/repos/reave/ip_scan/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/ip_scan/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/ip_scan/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/ip_scan/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/ip_scan/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/ip_scan/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/ip_scan/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/ip_scan/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/ip_scan/downloads",
  //     issues_url: "https://api.github.com/repos/reave/ip_scan/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/ip_scan/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/ip_scan/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/ip_scan/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/ip_scan/labels{/name}",
  //     releases_url: "https://api.github.com/repos/reave/ip_scan/releases{/id}",
  //     deployments_url: "https://api.github.com/repos/reave/ip_scan/deployments",
  //     created_at: "2019-11-13T20:00:16Z",
  //     updated_at: "2019-11-13T20:00:17Z",
  //     pushed_at: "2019-10-29T13:48:22Z",
  //     git_url: "git://github.com/reave/ip_scan.git",
  //     ssh_url: "git@github.com:reave/ip_scan.git",
  //     clone_url: "https://github.com/reave/ip_scan.git",
  //     svn_url: "https://github.com/reave/ip_scan",
  //     homepage: null,
  //     size: 12,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: null,
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 199750702,
  //     node_id: "MDEwOlJlcG9zaXRvcnkxOTk3NTA3MDI=",
  //     name: "JBOPS",
  //     full_name: "reave/JBOPS",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/JBOPS",
  //     description: "Just a Bunch Of Plex Scripts",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/JBOPS",
  //     forks_url: "https://api.github.com/repos/reave/JBOPS/forks",
  //     keys_url: "https://api.github.com/repos/reave/JBOPS/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/JBOPS/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/JBOPS/teams",
  //     hooks_url: "https://api.github.com/repos/reave/JBOPS/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/JBOPS/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/JBOPS/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/JBOPS/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/JBOPS/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/JBOPS/tags",
  //     blobs_url: "https://api.github.com/repos/reave/JBOPS/git/blobs{/sha}",
  //     git_tags_url: "https://api.github.com/repos/reave/JBOPS/git/tags{/sha}",
  //     git_refs_url: "https://api.github.com/repos/reave/JBOPS/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/JBOPS/git/trees{/sha}",
  //     statuses_url: "https://api.github.com/repos/reave/JBOPS/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/JBOPS/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/JBOPS/stargazers",
  //     contributors_url: "https://api.github.com/repos/reave/JBOPS/contributors",
  //     subscribers_url: "https://api.github.com/repos/reave/JBOPS/subscribers",
  //     subscription_url: "https://api.github.com/repos/reave/JBOPS/subscription",
  //     commits_url: "https://api.github.com/repos/reave/JBOPS/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/JBOPS/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/JBOPS/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/JBOPS/issues/comments{/number}",
  //     contents_url: "https://api.github.com/repos/reave/JBOPS/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/JBOPS/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/JBOPS/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/JBOPS/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/JBOPS/downloads",
  //     issues_url: "https://api.github.com/repos/reave/JBOPS/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/JBOPS/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/JBOPS/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/JBOPS/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/JBOPS/labels{/name}",
  //     releases_url: "https://api.github.com/repos/reave/JBOPS/releases{/id}",
  //     deployments_url: "https://api.github.com/repos/reave/JBOPS/deployments",
  //     created_at: "2019-07-31T00:59:56Z",
  //     updated_at: "2019-07-31T00:59:59Z",
  //     pushed_at: "2019-07-29T15:26:22Z",
  //     git_url: "git://github.com/reave/JBOPS.git",
  //     ssh_url: "git@github.com:reave/JBOPS.git",
  //     clone_url: "https://github.com/reave/JBOPS.git",
  //     svn_url: "https://github.com/reave/JBOPS",
  //     homepage: "",
  //     size: 1605,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "Python",
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: false,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: null,
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  //   {
  //     id: 195811072,
  //     node_id: "MDEwOlJlcG9zaXRvcnkxOTU4MTEwNzI=",
  //     name: "kbupdate",
  //     full_name: "reave/kbupdate",
  //     private: false,
  //     owner: {
  //       login: "reave",
  //       id: 1323535,
  //       node_id: "MDQ6VXNlcjEzMjM1MzU=",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1323535?v=4",
  //       gravatar_id: "",
  //       url: "https://api.github.com/users/reave",
  //       html_url: "https://github.com/reave",
  //       followers_url: "https://api.github.com/users/reave/followers",
  //       following_url:
  //         "https://api.github.com/users/reave/following{/other_user}",
  //       gists_url: "https://api.github.com/users/reave/gists{/gist_id}",
  //       starred_url:
  //         "https://api.github.com/users/reave/starred{/owner}{/repo}",
  //       subscriptions_url: "https://api.github.com/users/reave/subscriptions",
  //       organizations_url: "https://api.github.com/users/reave/orgs",
  //       repos_url: "https://api.github.com/users/reave/repos",
  //       events_url: "https://api.github.com/users/reave/events{/privacy}",
  //       received_events_url:
  //         "https://api.github.com/users/reave/received_events",
  //       type: "User",
  //       user_view_type: "public",
  //       site_admin: false,
  //     },
  //     html_url: "https://github.com/reave/kbupdate",
  //     description: "KB Viewer and Saver",
  //     fork: true,
  //     url: "https://api.github.com/repos/reave/kbupdate",
  //     forks_url: "https://api.github.com/repos/reave/kbupdate/forks",
  //     keys_url: "https://api.github.com/repos/reave/kbupdate/keys{/key_id}",
  //     collaborators_url:
  //       "https://api.github.com/repos/reave/kbupdate/collaborators{/collaborator}",
  //     teams_url: "https://api.github.com/repos/reave/kbupdate/teams",
  //     hooks_url: "https://api.github.com/repos/reave/kbupdate/hooks",
  //     issue_events_url:
  //       "https://api.github.com/repos/reave/kbupdate/issues/events{/number}",
  //     events_url: "https://api.github.com/repos/reave/kbupdate/events",
  //     assignees_url:
  //       "https://api.github.com/repos/reave/kbupdate/assignees{/user}",
  //     branches_url:
  //       "https://api.github.com/repos/reave/kbupdate/branches{/branch}",
  //     tags_url: "https://api.github.com/repos/reave/kbupdate/tags",
  //     blobs_url: "https://api.github.com/repos/reave/kbupdate/git/blobs{/sha}",
  //     git_tags_url:
  //       "https://api.github.com/repos/reave/kbupdate/git/tags{/sha}",
  //     git_refs_url:
  //       "https://api.github.com/repos/reave/kbupdate/git/refs{/sha}",
  //     trees_url: "https://api.github.com/repos/reave/kbupdate/git/trees{/sha}",
  //     statuses_url:
  //       "https://api.github.com/repos/reave/kbupdate/statuses/{sha}",
  //     languages_url: "https://api.github.com/repos/reave/kbupdate/languages",
  //     stargazers_url: "https://api.github.com/repos/reave/kbupdate/stargazers",
  //     contributors_url:
  //       "https://api.github.com/repos/reave/kbupdate/contributors",
  //     subscribers_url:
  //       "https://api.github.com/repos/reave/kbupdate/subscribers",
  //     subscription_url:
  //       "https://api.github.com/repos/reave/kbupdate/subscription",
  //     commits_url: "https://api.github.com/repos/reave/kbupdate/commits{/sha}",
  //     git_commits_url:
  //       "https://api.github.com/repos/reave/kbupdate/git/commits{/sha}",
  //     comments_url:
  //       "https://api.github.com/repos/reave/kbupdate/comments{/number}",
  //     issue_comment_url:
  //       "https://api.github.com/repos/reave/kbupdate/issues/comments{/number}",
  //     contents_url:
  //       "https://api.github.com/repos/reave/kbupdate/contents/{+path}",
  //     compare_url:
  //       "https://api.github.com/repos/reave/kbupdate/compare/{base}...{head}",
  //     merges_url: "https://api.github.com/repos/reave/kbupdate/merges",
  //     archive_url:
  //       "https://api.github.com/repos/reave/kbupdate/{archive_format}{/ref}",
  //     downloads_url: "https://api.github.com/repos/reave/kbupdate/downloads",
  //     issues_url: "https://api.github.com/repos/reave/kbupdate/issues{/number}",
  //     pulls_url: "https://api.github.com/repos/reave/kbupdate/pulls{/number}",
  //     milestones_url:
  //       "https://api.github.com/repos/reave/kbupdate/milestones{/number}",
  //     notifications_url:
  //       "https://api.github.com/repos/reave/kbupdate/notifications{?since,all,participating}",
  //     labels_url: "https://api.github.com/repos/reave/kbupdate/labels{/name}",
  //     releases_url: "https://api.github.com/repos/reave/kbupdate/releases{/id}",
  //     deployments_url:
  //       "https://api.github.com/repos/reave/kbupdate/deployments",
  //     created_at: "2019-07-08T12:50:18Z",
  //     updated_at: "2019-07-08T12:50:21Z",
  //     pushed_at: "2019-07-08T11:39:26Z",
  //     git_url: "git://github.com/reave/kbupdate.git",
  //     ssh_url: "git@github.com:reave/kbupdate.git",
  //     clone_url: "https://github.com/reave/kbupdate.git",
  //     svn_url: "https://github.com/reave/kbupdate",
  //     homepage: null,
  //     size: 12,
  //     stargazers_count: 0,
  //     watchers_count: 0,
  //     language: "PowerShell",
  //     has_issues: false,
  //     has_projects: true,
  //     has_downloads: true,
  //     has_wiki: true,
  //     has_pages: false,
  //     has_discussions: false,
  //     forks_count: 0,
  //     mirror_url: null,
  //     archived: false,
  //     disabled: false,
  //     open_issues_count: 0,
  //     license: {
  //       key: "mit",
  //       name: "MIT License",
  //       spdx_id: "MIT",
  //       url: "https://api.github.com/licenses/mit",
  //       node_id: "MDc6TGljZW5zZTEz",
  //     },
  //     allow_forking: true,
  //     is_template: false,
  //     web_commit_signoff_required: false,
  //     topics: [],
  //     visibility: "public",
  //     forks: 0,
  //     open_issues: 0,
  //     watchers: 0,
  //     default_branch: "master",
  //     permissions: {
  //       admin: false,
  //       maintain: false,
  //       push: false,
  //       triage: false,
  //       pull: true,
  //     },
  //   },
  // ];
  return GithubExplorerApi.get<Repository[]>(
    `/users/${username}/repos`,
    params,
  );
};

export const UserApi = {
  getUsersByUsername,
  getReposByUsername,
};
