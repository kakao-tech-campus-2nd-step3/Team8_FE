type Sort = {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
};

type Pageable = {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
};

export type HelloCall = {
  helloCallId: number;
  seniorName: string;
  days: string[];
  //   status: 'WAITING' | 'ACTIVE' | 'COMPLETED';
  status: string;
};

export type ServiceListResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: HelloCall[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
};
