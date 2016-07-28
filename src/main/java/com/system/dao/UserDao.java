package com.system.dao;

import com.system.model.User;
import org.apache.ibatis.annotations.Param;

/**
 * Created by yuan on 7/17/16.
 */
public interface UserDao {
    public User getUserByUserName(@Param("userName")String userName);
    public int addNewUser(User user);
    public int changeUserPassword(User user);

    int getAdmin(@Param("userName") String userName);
}
