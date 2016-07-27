package com.system.service.impl;

import com.system.service.FileService;
import com.system.util.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by yuan on 7/27/16.
 */
@Service
public class FileServiceImpl implements FileService {
    public String saveImg(MultipartFile file) {
        return saveFile(file, Configuration.imageDirectory);
    }

    public boolean deleteFile(String oldPicUrl) {
        if(oldPicUrl==null||oldPicUrl.trim().equals(""))
            return true;
        oldPicUrl=oldPicUrl.replaceFirst(Configuration.serverPicUrl,Configuration.imageDirectory);
        File file=new File(oldPicUrl);
        if(!file.exists())
            return true;
        if(!file.isFile())
            return false;
        file.delete();
        return true;
    }

    private String saveFile(MultipartFile file, String dirPath) {
        if(file==null||file.isEmpty())
            return null;
        File dir=new File(dirPath);
        if(!dir.exists()){
            dir.mkdirs();
        }
        String newFileName= UUID.randomUUID()+"";
        String picUrl=dirPath+File.separator+newFileName;
        File finalFile=new File(picUrl);
        try {
            file.transferTo(finalFile);
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
        return picUrl;
    }
}
