export class Repository {
  constructor(
    public name: string,
    public avatar_url: string,
    public public_repos: number,
    public following: number,
    public followers: number,
    public created_at: Date,
    public html_url: string
  ) {}
}
