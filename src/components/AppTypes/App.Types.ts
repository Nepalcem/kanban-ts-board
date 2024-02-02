export interface SimplifiedIssue {
  url: string;
  title: string;
  body: string;
  state: string;
  assignee: {
    login: string;
  };
}
