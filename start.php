<?php
	function ReadData($dir,$isFolders,$listDir= array())
	{
		$listDir = array();
		if($handler = opendir($dir))
		{
			while (($sub = readdir($handler)) !== FALSE)
			{
				if ($sub != "." && $sub != ".." && $sub != "Thumb.db" && $sub != ".gitignore.txt")
				{
					if(is_dir($dir."/".$sub) && $isFolders == 'true')
					{
						$listDir[] = $sub;
					}
					if(is_file($dir."/".$sub) && $isFolders == 'false')
					{
						$listDir[] = $sub;
					}
					if(is_file($dir."/".$sub) && $isFolders == 'all')
					{					
						$listDir[] = $dir."/".$sub;
					}
					else if(is_dir($dir."/".$sub) && $isFolders == 'all')
					{
						$listDir[$sub] = ReadData($dir.'/'.$sub,'all');						
					}
				} 
			}    
			closedir($handler); 
		}
		return $listDir;    
	}
		
	echo  json_encode(ReadData($_REQUEST["dir"],$_REQUEST["dirList"]));	
?>