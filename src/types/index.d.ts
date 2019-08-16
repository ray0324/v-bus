type Data = {
  [key: string]: any;
};

declare interface Resp {
  error_no: number;
  error_msg: string;
  data?: Data | Data[];
}
