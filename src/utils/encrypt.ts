import bcrypt from 'bcrypt';
import config from '../config/config';

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(Number(config.SALT));
  return bcrypt.hash(password, salt);
};

export default encryptPassword;
