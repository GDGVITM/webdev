import os

#getting all dir in current dir

def get_all_dir():
    return [d for d in os.listdir() if os.path.isdir(d)]

#creating __init__.py file in all dir passed to init_maker function

def init_maker(dirs):
    for d in dirs:
        with open(f'{d}/__init__.py', 'w') as f:
            pass

#creating bunch of dir passed to dir_maker function inside given dir path

def dir_maker(path, dirs):
    for d in dirs:
        os.makedirs(f'{path}/{d}')

#creating bunch of files passed to file_maker function inside given dir path

def file_maker(path, files):
    for f in files:
        with open(f'{path}/{f}', 'w') as file:
            pass

if __name__ == '__main__':
    dirs = ['db','config','controllers','middleware','model','routes','utils']
    src = os.getcwd()+'/src'
    dir_maker(src, dirs)

# if __name__=="__main__":
#     src = os.getcwd()+'/src/app/pet'
#     file_maker(src,['layout.tsx'])