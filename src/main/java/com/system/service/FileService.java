package com.system.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by yuan on 7/27/16.
 */
public interface FileService {

    /**
     * 存储图片，并且返回最终存放文件的url
     * @param files
     * @return
     */
    String saveImg(MultipartFile files);

    /**
     * 删除文件
     * @param oldPicUrl
     * @return true-成功删除,false-无法删除
     */
    boolean deleteFile(String oldPicUrl);
}
