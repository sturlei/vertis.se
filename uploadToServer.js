const fs = require( 'fs' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const Client = require( 'ssh2-sftp-client' );
const username = require( "os" ).userInfo().username;
const vertis = new Client();

const buildFolderName = 'build'
// remote folder
const siteDir = '/home/sturlei/webpages/vertis.se'
const remoteBuildDir = path.join( siteDir, buildFolderName );
const remoteTempBuildDir = path.join( siteDir, `${buildFolderName}_temp` );

// current folder
const currentBuildFolder = path.join( __dirname, buildFolderName );

const init = async () => {
    try {

        await vertis.connect( {
            host: 'vertis.se',
            port: '4244',
            username: 'sturlei',
            privateKey: fs.readFileSync( path.join( `/Users/${username}/Dropbox/ssh key/vertis.se/root`, 'id_rsa' ) ),


        } )
        const list = await vertis.list( siteDir, )
        const buildFolder = list.find( curr => curr.name === buildFolderName )
        if ( buildFolder ) {
            console.log( chalk.cyan.underline( 'Uploading build as temp folder and removing old build folder' ) );
            await vertis.uploadDir( currentBuildFolder, remoteTempBuildDir )
            console.log( chalk.cyan.underline( 'loading... 33%' ) );
            await vertis.rmdir( remoteBuildDir, true )
            console.log( chalk.cyan.underline( 'loading... 69%' ) );
            await vertis.rename( remoteTempBuildDir, remoteBuildDir );
            console.log( chalk.cyan.underline( 'loading... 100%' ) );

        } else {
            console.log( chalk.cyan.underline( 'Build directory not found. Copying files over to the server.' ) );
            console.log( chalk.cyan.underline( 'loading... 0%' ) );
            await vertis.uploadDir( currentBuildFolder, remoteBuildDir )
            console.log( chalk.cyan.underline( 'loading... 100%' ) );
        }

        console.log( chalk.green.bold( '\n++ Done ++' ) );
        vertis.end()
    } catch ( error ) {
        console.log( error.message );
    }

}

init();