export type ReviewData = {
  contact_google_url: string;
  message_id: string;
};

export type UserEdge = {
  cursor: string;
  node: User;
};

export type User = {
  name: string;
  email: string;
  id: string;
  emailVerified: boolean;
  createdAt: string;
  role: string;
  organisation: Organisation;
};

export type Organisation = {
  name: string;
};

export type InboxState = {
  selectMenuVisible: boolean;
  selectedContacts: string[];
  selectedInbox: SelectedInbox;
};

export type SelectedInbox = {
  id: number;
  name: string;
  value: boolean;
};

export type ContactCollection = {
  edges: [ContactEdge];
  pageInfo: any;
};

export type ContactEdge = {
  cursor: string;
  node: Contact;
};

export type Contact = {
  createdAt: string;
  email?: string;
  googleAvatar: string | undefined;
  id: string;
  lastActivityAt: string;
  name: string | undefined;
  open: boolean;
  phone: string | undefined;
  updatedAt: string;
  inboxEvents?: InboxEventCollection | undefined;
};

export type InboxEventCollection = {
  edges: [InboxEventEdge];
  pageInfo: any;
};

export type InboxEventEdge = {
  cursor: string;
  node: InboxEvent;
};

export type InboxEvent = {
  channel: "SMS" | "REVIEW" | "EMAIL";
  createdAt: string;
  direction: string;
  id: string;
  properties: SMS | Review | Email;
  sender: Sender;
  viewed: string;
};

export enum Channel {
  "SMS",
  "REVIEW",
  "EMAIL",
}

export type Sender = {
  email: string;
  id: string;
  name: string;
};

export type SMS = {
  fromNumber: string;
  toNumber: string;
  media: [any];
  message: string;
  uri: string;
};

export type Email = {
  fromEmail: string;
  toEmail: string;
  subject: string;
  text: string;
  html?: any;
};

export type Review = {
  comment: string;
  name: string;
  rating: string;
  reply: string | null;
  replyUpdatedAt: string | null;
};

export type Invite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  accepted: Boolean;
  expiredAt: Date;
};

export type InviteCollection = {
  edges: [InviteEdge];
  pageInfo: PageInfo;
};

export type InviteEdge = {
  cursor: string;
  node: Invite;
};

export type ReplyTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  channel: Channel;
  body: string;
  subject: string;
};

export type ReplyTemplateCollection = {
  edges: [ReplyTemplateEdge];
  pageInfo: PageInfo;
};

export type ReplyTemplateEdge = {
  cursor: string;
  node: ReplyTemplate;
};

export type TemplateVariableCollection = {
  edges: [TemplateVariableEdge];
  pageInfo: PageInfo;
};

export type TemplateVariable = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  key: string;
  value: string;
};

export type TemplateVariableEdge = {
  cursor: string;
  node: TemplateVariable;
};

export type PageInfo = {};

export type ReviewAPIData = {
  organisationName: string;
  locationUrl: string;
  newReviewUrl: string;
  totalReviewCount: number;
  averageRating: number;
  reviews: [
    {
      createdAt: string;
      updatedAt: string;
      name: string;
      rating: string;
      comment: string;
      provider: string;
      replyUpdatedAt?: string;
      reviewer: {
        name: string;
        avatar: string;
      };
    }
  ];
};

export type WidgetProps = {
  data: ReviewAPIData | undefined;
  loading: boolean;
};
